import {FormType} from "../../components/headless/form/type.js";
import FormGeneric2 from "../../components/form/generic/generator.js";
import AddGeneric from "../../components/headless/add.js";
const defs = [
  {
    name: "serverName",
    label: "Server Name2",
    uiType: FormType.Text,
    optional: false
  }
];
const Form = FormGeneric2(defs);
const insert = (a) => {
  console.log(a);
  alert(JSON.stringify(a) + " will now be redirected to home page");
  return Promise.resolve({id: 1});
};
export default AddGeneric(insert, Form, "/");
