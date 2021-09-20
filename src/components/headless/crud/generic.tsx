import React from "react";
import { Route, Switch } from "react-router-dom";

import { Types } from "@nexys/core-list";

import AddGeneric from "../add";
import { FormDef, FormProps } from "../form/type";
import { ViewField } from "../view/type";
import { CrudRequestDetail, DetailLayoutProps } from "../detail/type";

import { ListProps } from "../list/type";

import { CrudInsert, CrudRequest, ExtraUnit } from "./type";

type DetailGenericType<A, Id> = (
  Form: (a: FormProps<A>) => JSX.Element,
  viewFields: ViewField<A>[],
  { update, detail, deleteById, getOptions }: CrudRequestDetail<A, Id>,
  redirectUrl: string,
  showToggle: boolean
) => (p: Omit<DetailLayoutProps<Id>, "Detail">) => JSX.Element;

export const AddRoute = <A, Id>(
  Form: (p: FormProps<A>) => JSX.Element,
  urlPrefix: string,
  addLink: string,
  crudInsert?: CrudInsert<A, Id>
) => {
  if (!crudInsert) {
    return <></>;
  }
  const Add = AddGeneric(crudInsert, Form, urlPrefix);
  return <Route exact path={addLink} component={Add} />;
};

export const CrudGeneric =
  <A extends { id: Id }, Id>(
    ListGeneric: (a: ListProps<A>) => JSX.Element,
    DetailGeneric: DetailGenericType<A, Id>,
    FormWDef: <A>(
      formDef: FormDef<A, number>[]
    ) => (p: FormProps<A>) => JSX.Element
  ) =>
  (
    def: Types.Definition<A>,
    defDetail: FormDef<A>[],
    viewFields: ViewField<A>[],
    urlPrefix: string,
    crud: CrudRequest<A, Id>,
    editTitle: string = "Edit",
    extras?: ExtraUnit<Id>[],
    showEditToggle: boolean = true
  ) => {
    const Form = FormWDef<A>(defDetail);

    return CrudGenericWForm(ListGeneric, DetailGeneric, Form)(
      def,
      viewFields,
      urlPrefix,
      crud,
      editTitle,
      extras,
      showEditToggle
    );
  };

export const CrudGenericWForm =
  <A extends { id: Id }, Id>(
    ListGeneric: (a: ListProps<A>) => JSX.Element,
    DetailGeneric: DetailGenericType<A, Id>,
    Form: (p: FormProps<A>) => JSX.Element
  ) =>
  (
    def: Types.Definition<A>,
    viewFields: ViewField<A>[],
    urlPrefix: string,
    crud: CrudRequest<A, Id>,
    editTitle: string = "Edit",
    extras?: ExtraUnit<Id>[],
    showEditToggle: boolean = true
  ) => {
    const addLink = urlPrefix + "/add";
    const editLink = (childId: number | ":id") =>
      urlPrefix + "/" + childId + "/edit";
    const redirectUrl = urlPrefix;
    const backUrl = urlPrefix;

    const List = () => (
      <ListGeneric
        editLink={editLink}
        addLink={addLink}
        getData={crud.list}
        def={def}
      />
    );

    const PreDetail = DetailGeneric(
      Form,
      viewFields,
      { update: crud.update, deleteById: crud.deleteById, detail: crud.detail },
      redirectUrl,
      showEditToggle
    );

    const Detail = () => (
      <PreDetail
        backUrl={backUrl}
        title={editTitle}
        extras={
          extras
            ? extras.map(({ Component }) => ({ id }: { id: Id }) => (
                <Component data={id} />
              ))
            : undefined
        }
      />
    );

    return () => (
      <Switch>
        {AddRoute<A, Id>(Form, urlPrefix, addLink, crud.insert)}
        <Route path={editLink(":id")} component={Detail} />
        <Route path={urlPrefix} component={List} />
      </Switch>
    );
  };

export default CrudGeneric;
