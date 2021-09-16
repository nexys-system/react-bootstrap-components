import React from "react";

import { FormOptionsMap, FormProps } from "../headless/form/type";
import { EditProps } from "../headless/toggle2";
import { ViewField } from "../headless/view/type";
import { CrudRequestDetail } from "../headless/detail/type";

import ToggleGeneric from "../toggle";
import ViewGeneric from "../view";
import EditGeneric from "../edit";
import DeleteGeneric from "../delete";
import WLoader from "../w-loader";

const Detail = <Id, A extends { id: Id }>(
  Form: (a: Omit<FormProps<A>, "formDef">) => JSX.Element,
  viewFields: ViewField<A>[],
  { update, detail, deleteById, getOptions }: CrudRequestDetail<A, Id>,
  redirectUrl: string,
  showToggle: boolean = true
) => {
  // merge different promises to have all in the same functions
  const detailWOptions = async (
    id: Id
  ): Promise<{ data: A; options: FormOptionsMap<A> }> => {
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

  const EditLoader = ({ id }: { id: Id }) =>
    WLoader<{ data: A; options?: FormOptionsMap<A> }>({
      Component: ({
        data,
      }: {
        data: { data: A; options?: FormOptionsMap<A> };
      }) => <Main id={id} data={data.data} formOptions={data.options} />,
      getData: () => detailWOptions(id),
    });

  return ({ id }: { id: Id }) => (
    <>
      <EditLoader id={id} />
      &nbsp;
      <Delete id={id} />
    </>
  );
};

const getMain = <A, Id>(
  showToggle: boolean,
  viewFields: ViewField<A>[],
  Form: (a: Omit<FormProps<A>, "formDef">) => JSX.Element,
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

export default Detail;
