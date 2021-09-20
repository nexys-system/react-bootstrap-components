import FormGeneratorWithoutDef from "./generator-wo-def";

import * as U from "./utils";
import { InputUnitProps, WrapperProps, FormDef } from "./type";

import FormGenericUI from "./ui";

export const FormGenerator = <A,>(
  Wrapper: (props: WrapperProps) => JSX.Element,
  FormUnit: (props: InputUnitProps<A>) => JSX.Element,
  BtnSubmit: (prop: { isLoading: boolean }) => JSX.Element,
  formDef: FormDef<A>[]
) => {
  const FormUI = FormGenericUI(formDef, Wrapper, BtnSubmit, FormUnit);
  const validator = U.generateValidatorFromDef(formDef);
  return FormGeneratorWithoutDef(FormUI, validator);
};

export default FormGenerator;
