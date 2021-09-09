import ToggleGeneric from "../../../headless/toggle.js";
import View from "../view/index.js";
import GenericForm from "../form.js";
import {BtnBack, BtnEdit} from "../../../button/actions.js";
const Toggle = (props) => ToggleGeneric(GenericForm, View, BtnBack, BtnEdit)(props);
export default Toggle;
