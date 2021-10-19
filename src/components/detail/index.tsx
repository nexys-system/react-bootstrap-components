import React from "react";
import { ExtraUnit } from "../headless/crud/type";

import { CrudRequestDetail, DetailLayoutProps } from "../headless/detail/type";
import { FormProps } from "../headless/form/type";
import { ViewField } from "../headless/view/type";

import Layout from "./layout";
import Detail from "./main";

const DetailWLayout = <Id, A extends { id: Id }>(
  title: string,
  Form: (a: FormProps<A>) => JSX.Element,
  viewFields: ViewField<A>[],
  { update, detail, deleteById, getOptions }: CrudRequestDetail<A, Id>,
  redirectUrl: string,
  showToggle: boolean = true,
  detailColWidth: number = 6,
  extras?: ExtraUnit<A>[]
) => {
  return ({ backUrl }: Omit<DetailLayoutProps<Id>, "Detail">) => {
    const D = Detail(
      title,
      Form,
      viewFields,
      { update, detail, deleteById, getOptions },
      redirectUrl,
      showToggle,
      detailColWidth,
      extras
    );

    return <Layout backUrl={backUrl} Detail={D} />;
  };
};

export default DetailWLayout;
