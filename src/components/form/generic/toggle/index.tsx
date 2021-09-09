import * as T from "../../../headless/form/type";
import ToggleGeneric from "../../../headless/toggle";

import View from "../view";
import GenericForm from "../form";

import { BtnBack, BtnEdit } from "../../../button/actions";

const Toggle = <A,>(props: T.ToggleProps<A>) =>
  ToggleGeneric(GenericForm, View, BtnBack, BtnEdit)(props);

export default Toggle;
