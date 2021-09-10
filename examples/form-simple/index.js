import {FormType} from "../../components/headless/form/type.js";
import * as FormGeneric2 from "../../components/form/generic/generator/index.js";
import AddGeneric from "../../components/add.js";
const defs = [
  {
    name: "serverName",
    label: "Server Name2",
    uiType: FormType.Text,
    optional: false
  }
];
const Form = FormGeneric2.FormWDef(defs);
const insert = (a) => {
  console.log(a);
  return Promise.resolve({id: 1});
};
export default AddGeneric(insert, Form, "/form-simple");
