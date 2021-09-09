import * as Inputs from "../input/index.js";
import InputUnitGeneric from "../../headless/form/input-unit.js";
const InputUnit = InputUnitGeneric(Inputs.Text, Inputs.Number, Inputs.Select.Scalar);
export default InputUnit;
