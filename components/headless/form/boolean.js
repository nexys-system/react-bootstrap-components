import React from "../../../_snowpack/pkg/react.js";
const getCheckedValue = (value) => {
  if (typeof value === "boolean") {
    return value;
  }
  return false;
};
const InputBooleanGeneric = (UI) => ({value, disabled, onChange, errors}) => {
  return /* @__PURE__ */ React.createElement(UI, {
    checked: getCheckedValue(value),
    setToggle: () => onChange(!value),
    errors,
    disabled
  });
};
export default InputBooleanGeneric;
