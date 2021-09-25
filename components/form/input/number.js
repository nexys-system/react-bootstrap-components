import React from "../../../_snowpack/pkg/react.js";
import {InputNumberGeneric} from "../generic/number.js";
const InputUI = ({value, onChange, errors, disabled, placeholder}) => /* @__PURE__ */ React.createElement("input", {
  className: "form-control" + (errors && errors.length > 0 ? "  is-invalid" : ""),
  disabled,
  placeholder,
  type: "text",
  value,
  onChange: (v) => onChange(v.target.value)
});
const InputNumber = InputNumberGeneric(InputUI);
export default InputNumber;
