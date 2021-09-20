import React from "../../../_snowpack/pkg/react.js";
const FormGenericUI = (formDef, Wrapper, BtnSubmit, FormUnit) => ({data, errors, onChange, disabled}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, formDef.map((fd, i) => {
    const name = fd.name;
    const errorUnit = errors && errors[name];
    return /* @__PURE__ */ React.createElement(Wrapper, {
      errors: errorUnit,
      key: i,
      label: fd.label
    }, /* @__PURE__ */ React.createElement(FormUnit, {
      type: fd.uiType,
      errors: errorUnit,
      value: data[fd.name],
      onChange: (v) => onChange(fd.name, v),
      options: fd.options,
      disabled
    }));
  }), /* @__PURE__ */ React.createElement(BtnSubmit, {
    isLoading: disabled
  }));
};
export default FormGenericUI;
