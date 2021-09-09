import * as Inputs from "../input";
import InputUnitGeneric from "../../headless/form/input-unit";

const InputUnit = InputUnitGeneric(
  Inputs.Text,
  Inputs.Number,
  Inputs.Select.Scalar
);

export default InputUnit;
