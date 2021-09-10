import * as Inputs from "../input/index.js";
import InputUnitGeneric from "../../headless/form/input-unit.js";
import {Input} from "../index.js";
const InputUnit = InputUnitGeneric(Inputs.Text, Inputs.Number, Inputs.Switch, Inputs.Select.Scalar, Input.Select.Object);
export default InputUnit;
