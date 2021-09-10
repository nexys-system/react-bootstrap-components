import * as Inputs from "../input/index.js";
import InputUnitGeneric from "../../headless/form/input-unit.js";
const InputUnit = InputUnitGeneric(Inputs.Text, Inputs.Number, Inputs.Switch, Inputs.Select.Scalar, Inputs.Select.Object);
export default InputUnit;
