import React from "../../../_snowpack/pkg/react.js";
export const InputNumber = ({
  value,
  onChange,
  errors
}) => /* @__PURE__ */ React.createElement("input", {
  className: "form-control" + (errors && errors.length > 0 ? "  is-invalid" : ""),
  type: "number",
  value,
  onChange: (v) => v.target.value === "" ? onChange(void 0) : onChange(Number(v.target.value))
});
export default InputNumber;
