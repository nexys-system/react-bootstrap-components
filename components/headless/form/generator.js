import FormGeneratorWithoutDef from "./generator-wo-def.js";
import * as U from "./utils.js";
import FormGenericUI from "./ui.js";
export const FormGenerator = (Wrapper, FormUnit, BtnSubmit) => ({formDef, ...props}) => {
  const FormUI = FormGenericUI(formDef, Wrapper, BtnSubmit, FormUnit);
  const validator = U.generateValidatorFromDef(formDef);
  return FormGeneratorWithoutDef(FormUI)({validator, ...props});
};
export default FormGenerator;
