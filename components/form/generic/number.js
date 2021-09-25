import React from "../../../_snowpack/pkg/react.js";
import {acceptDecimalValue} from "./utils.js";
export const InputNumberGeneric = (UI, acceptNumericValue = acceptDecimalValue) => (p) => {
  const [value, setValue] = React.useState(p.value ? p.value.toString() : "");
  const handleChange = (s) => {
    if (s === void 0 || s === "") {
      p.onChange(void 0);
      return;
    }
    const v = Number(s);
    if (acceptNumericValue(s)) {
      setValue(s);
    }
    if (!isNaN(v)) {
      p.onChange(v);
    }
  };
  return /* @__PURE__ */ React.createElement(UI, {
    disabled: p.disabled,
    placeholder: p.placeholder,
    value,
    onChange: handleChange,
    errors: p.errors
  });
};
