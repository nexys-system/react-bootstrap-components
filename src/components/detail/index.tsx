import React from "react";

import { CrudRequestDetail, DetailLayoutProps } from "../headless/detail/type";
import { FormProps } from "../headless/form/type";
import { ViewField } from "../headless/view/type";

import Layout from "./layout";
import Detail from "./main";

const DetailWLayout = <Id, A extends { id: Id }>(
  Form: (a: Omit<FormProps<A>, "formDef">) => JSX.Element,
  viewFields: ViewField<A>[],
  { update, detail, deleteById, getOptions }: CrudRequestDetail<A, Id>,
  redirectUrl: string,
  showToggle: boolean = true
) => {
  return ({
    title,
    backUrl,
    detailColWidth,
    extras,
  }: Omit<DetailLayoutProps<Id>, "Detail">) => {
    const D = Detail(
      Form,
      viewFields,
      { update, detail, deleteById, getOptions },
      redirectUrl,
      showToggle
    );

    return (
      <Layout
        title={title}
        backUrl={backUrl}
        Detail={D}
        detailColWidth={detailColWidth}
        extras={extras}
      />
    );
  };
};

export default DetailWLayout;
