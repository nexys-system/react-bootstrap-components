import * as Inputs from "../input";
import InputUnitGeneric from "../headless/input-unit";

const InputUnit = InputUnitGeneric(
  Inputs.Text,
  Inputs.Number,
  Inputs.Select.Scalar
);

export default InputUnit;
