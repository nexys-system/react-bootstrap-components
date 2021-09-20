import ToggleGeneric from "../../../headless/toggle.js";
import View from "../view/index.js";
import * as GenericForm from "../generator/index.js";
import {BtnBack, BtnEdit} from "../../../button/actions.js";
const Toggle = (formDef) => (props) => ToggleGeneric(GenericForm.FormWDef, formDef, View, BtnBack, BtnEdit)(props);
export default Toggle;
