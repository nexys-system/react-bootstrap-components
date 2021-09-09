import React from "../../../_snowpack/pkg/react.js";
const InputUnitGeneric = (InputText, InputNumber, InputSelectScalar) => ({type, onChange, value, options, errors}) => {
  switch (type) {
    case "category":
      if (!options) {
        throw Error("options were not given");
      }
      return /* @__PURE__ */ React.createElement(InputSelectScalar, {
        options,
        value,
        onChange,
        errors
      });
    case "number":
      return /* @__PURE__ */ React.createElement(InputNumber, {
        value,
        onChange,
        errors
      });
    default:
      return /* @__PURE__ */ React.createElement(InputText, {
        value,
        onChange,
        errors
      });
  }
};
export default InputUnitGeneric;
