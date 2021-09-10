import React from "../../../../_snowpack/pkg/react.js";
import Wrapper from "../../wrapper.js";
import InputGeneric from "../input.js";
const FormUI = (defs) => ({disabled, data, onChange, options}) => /* @__PURE__ */ React.createElement(React.Fragment, null, defs.map(({name, uiType}, i) => {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    key: i,
    label: name
  }, /* @__PURE__ */ React.createElement(InputGeneric, {
    type: uiType,
    options: options ? options.get(name) : [],
    disabled,
    value: data[name],
    onChange: (v) => onChange(v, name)
  }));
}));
export default FormUI;
