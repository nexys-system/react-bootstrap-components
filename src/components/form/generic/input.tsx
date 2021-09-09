import * as Inputs from "../input";
import InputUnitGeneric from "../../headless/form/input-unit";
import { Input } from "..";

const InputUnit = InputUnitGeneric<any>(
  Inputs.Text,
  Inputs.Number,
  Inputs.Select.Scalar,
  Input.Select.Object
);

export default InputUnit;
