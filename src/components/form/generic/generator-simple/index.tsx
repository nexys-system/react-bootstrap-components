import { FormDef } from "../../../headless/form/type";
import WrapperGeneric from "./generic-wrapper";
import UIGeneric from "./ui";

export default <T,>(defs: FormDef<T>[]) => WrapperGeneric(UIGeneric(defs));
