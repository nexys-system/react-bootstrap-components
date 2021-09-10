import React from "react";
import { FormType, FormDef } from "../../components/headless/form/type";
import FormGeneric from "../../components/form/generic/generator-simple";

interface Domain {
  serverName: string;
}

const defs: FormDef<Domain>[] = [
  { name: "serverName", uiType: FormType.Text, optional: false },
];

export default FormGeneric(defs);
