import React from "../../../../_snowpack/pkg/react.js";
import {getValue} from "../../../headless/form/utils.js";
export const Select = ({
  options,
  value,
  onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`),
  errors
}) => /* @__PURE__ */ React.createElement("select", {
  className: "form-control" + (errors && errors.length > 0 ? "  is-invalid" : ""),
  defaultValue: value,
  onChange: (v) => onChange(getValue(v.target.value))
}, /* @__PURE__ */ React.createElement("option", {
  value: ""
}), options.map(({id, name}, i) => /* @__PURE__ */ React.createElement("option", {
  key: i,
  value: id
}, name)));
export default Select;
