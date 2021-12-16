import React from "react";

import AddGeneric from "../add";
import { FormProps } from "../form/type";

import { CrudInsert } from "./type";

// this is to account for the case when add is not given
export const AddComponent = <A, Id>(
  Form: (p: FormProps<A>) => JSX.Element,
  urlPrefix: string,

  crudInsert?: CrudInsert<A, Id>
) => {
  if (!crudInsert) {
    return () => <></>;
  }

  return AddGeneric(crudInsert, Form, urlPrefix);
};
