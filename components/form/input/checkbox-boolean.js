import React from "../../../_snowpack/pkg/react.js";
import InputBooleanGeneric from "../../headless/form/boolean.js";
const UI = ({errors, setToggle, checked, disabled}) => /* @__PURE__ */ React.createElement("input", {
  className: "" + (errors && errors.length > 0 ? "  is-invalid" : ""),
  disabled,
  type: "checkbox",
  checked,
  onChange: setToggle
});
const InputBoolean = InputBooleanGeneric(UI);
export default InputBoolean;
