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
  showToggle: boolean,
  detailColWidth: number,
  extras?: ExtraUnit<A>[],
  editTitle?: string
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
    ListGeneric: (a: ListProps<A, Id>) => JSX.Element,
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
    showEditToggle: boolean = true,
    detailColWidth: number = 6,
    extras?: ExtraUnit<A>[],
    editTitle?: string
  ) => {
    const Form = FormWDef<A>(defDetail);

    return CrudGenericWForm(ListGeneric, DetailGeneric, Form)(
      def,
      viewFields,
      urlPrefix,
      crud,
      showEditToggle,
      detailColWidth,
      extras,
      editTitle
    );
  };

export const CrudGenericWForm =
  <A extends { id: Id }, Id>(
    ListGeneric: (a: ListProps<A, Id>) => JSX.Element,
    DetailGeneric: DetailGenericType<A, Id>,
    Form: (p: FormProps<A>) => JSX.Element
  ) =>
  (
    def: Types.Definition<A>,
    viewFields: ViewField<A>[],
    urlPrefix: string,
    crud: CrudRequest<A, Id>,
    showEditToggle: boolean = true,
    detailColWidth: number = 6,
    extras?: ExtraUnit<A>[],
    editTitle?: string
  ) => {
    const addLink = urlPrefix + "/add";
    const editLink = (childId: Id | ":id") =>
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
      showEditToggle,
      detailColWidth,
      extras,
      editTitle
    );

    const Detail = () => <PreDetail backUrl={backUrl} />;

    return () => (
      <Switch>
        {AddRoute<A, Id>(Form, urlPrefix, addLink, crud.insert)}
        <Route path={editLink(":id")} component={Detail} />
        <Route path={urlPrefix} component={List} />
      </Switch>
    );
  };

export default CrudGeneric;
