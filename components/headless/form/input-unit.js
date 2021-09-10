import React from "../../../_snowpack/pkg/react.js";
import * as TT from "./type.js";
const InputUnitGeneric = (InputText, InputNumber, InputSwitch, InputSelectScalar, InputSelectObject) => ({type, onChange, value, options, errors}) => {
  switch (type) {
    case TT.FormType.Select:
      if (!options) {
        throw Error("options were not given");
      }
      return /* @__PURE__ */ React.createElement(InputSelectScalar, {
        options,
        value,
        onChange,
        errors
      });
    case TT.FormType.SelectObject:
      if (!options) {
        throw Error("options were not given");
      }
      return /* @__PURE__ */ React.createElement(InputSelectObject, {
        options,
        value,
        onChange,
        errors
      });
    case TT.FormType.Number:
      return /* @__PURE__ */ React.createElement(InputNumber, {
        value,
        onChange,
        errors
      });
    case TT.FormType.Text:
      return /* @__PURE__ */ React.createElement(InputText, {
        value,
        onChange,
        errors
      });
    case TT.FormType.Switch:
      return /* @__PURE__ */ React.createElement(InputSwitch, {
        value,
        onChange,
        errors
      });
  }
};
export default InputUnitGeneric;
