import React from "../../../_snowpack/pkg/react.js";
export const FormGeneric = (FormElement) => ({onSubmit, children}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return /* @__PURE__ */ React.createElement(FormElement, {
    handleSubmit
  }, children);
};
export const FormElementDefault = ({
  handleSubmit,
  children
}) => /* @__PURE__ */ React.createElement("form", {
  onSubmit: handleSubmit
}, children);
export const FormDefault = FormGeneric(FormElementDefault);
