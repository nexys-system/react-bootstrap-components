import * as T from "../../../headless/form/type";
import ToggleGeneric from "../../../headless/toggle";

import View from "../view";
import * as GenericForm from "../generator";

import { BtnBack, BtnEdit } from "../../../button/actions";

const Toggle =
  <A,>(formDef: T.FormDef<A>[]) =>
  (props: T.ToggleProps<A>) =>
    ToggleGeneric(GenericForm.FormWDef, formDef, View, BtnBack, BtnEdit)(props);

export default Toggle;
