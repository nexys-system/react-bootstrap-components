import React from "react";

import { FormOptionsMap, FormProps } from "../headless/form/type";
import { EditProps } from "../headless/edit/type";
import { ViewField } from "../headless/view/type";
import { CrudRequestDetail } from "../headless/detail/type";

import ToggleGeneric from "../toggle";
import ViewGeneric from "../view";
import EditGeneric from "../edit";
import DeleteGeneric from "../delete";
import { ExtraUnit } from "../headless/crud/type";

interface DataWOptions<A> {
  data: A;
  options: FormOptionsMap<A>;
}

const DetailWExtras = <Id, A extends { id: Id }>(
  title: string,
  Form: (a: FormProps<A>) => JSX.Element,
  viewFields: ViewField<A>[],
  { update, detail, deleteById, getOptions }: CrudRequestDetail<A, Id>,
  redirectUrl: string,
  showToggle: boolean = true,
  detailColWidth: number = 6,
  extras?: ExtraUnit<A>[]
) => {
  const [data, setData] = React.useState<DataWOptions<A> | "null">("null");
  // merge different promises to have all in the same functions
  const detailWOptions = async (id: Id): Promise<DataWOptions<A>> => {
    const data = await detail(id);
    const options: FormOptionsMap<A> = getOptions
      ? await getOptions()
      : new Map();

    return { data, options };
  };

  const Delete = deleteById
    ? DeleteGeneric<Id>(deleteById, redirectUrl)
    : () => <></>;

  // define final view based on options chosen
  const Main = getMain(showToggle, viewFields, Form, redirectUrl, update);

  getOptions && getOptions();

  return ({ id }: { id: Id }) => {
    if (!isData(data)) {
      detailWOptions(id).then((data) => setData(data));
    }

    return (
      <div className="row">
        <div className={"col-md-" + detailColWidth}>
          <h2>{title}</h2>
          {isData(data) ? (
            <Main id={id} data={data.data} formOptions={data.options} />
          ) : (
            <>loading</>
          )}
          &nbsp;
          <Delete id={id} />
        </div>

        {extras &&
          extras.map((ExtraUnit, i) =>
            isData(data) ? (
              <div key={i} className={`col-md-${ExtraUnit.colSpan || 6}`}>
                <ExtraUnit.Component data={data.data} />
              </div>
            ) : (
              <>loading</>
            )
          )}
      </div>
    );
  };
};

const isData = <A,>(d: DataWOptions<A> | "null"): d is DataWOptions<A> =>
  d !== "null";

const getMain = <A, Id>(
  showToggle: boolean,
  viewFields: ViewField<A>[],
  Form: (a: FormProps<A>) => JSX.Element,
  redirectUrl: string,
  update?: (data: Partial<A>, id: Id) => Promise<void>
): ((a: EditProps<A, Id>) => JSX.Element) => {
  const View = ViewGeneric<A>(viewFields);
  if (!update) {
    return View;
  }

  const Edit = EditGeneric<A, Id>(Form, update, redirectUrl);

  if (showToggle) {
    return ToggleGeneric<A, Id>(Edit, View);
  }

  return Edit;
};

export default DetailWExtras;
