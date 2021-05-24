import React from "../../_snowpack/pkg/react.js";
export const Form = ({
  onSubmit,
  children
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, children);
};
export default Form;
