import React from "react";
import { FormType, FormDef } from "../../components/headless/form/type";
//import FormGeneric from "../../components/form/generic/generator-simple";
import * as FormGeneric2 from "../../components/form/generic/generator";
import AddGeneric from "../../components/add";
interface Domain {
  serverName: string;
}

const defs: FormDef<Domain>[] = [
  {
    name: "serverName",
    label: "Server Name2",
    uiType: FormType.Text,
    optional: false,
  },
];

const Form = FormGeneric2.FormWDef(defs);

const insert = (a: any) => {
  console.log(a);
  return Promise.resolve({ id: 1 });
};

export default AddGeneric<Domain>(insert, Form, "/form-simple");
