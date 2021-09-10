import {FormType} from "../../components/headless/form/type.js";
import FormGeneric from "../../components/form/generic/generator-simple/index.js";
const defs = [
  {name: "serverName", uiType: FormType.Text, optional: false}
];
export default FormGeneric(defs);
