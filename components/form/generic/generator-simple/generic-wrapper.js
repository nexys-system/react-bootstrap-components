import React from "../../../../_snowpack/pkg/react.js";
const Form = (FormUI) => ({valueDefault = {}, onSuccess}) => {
  const [data, setData] = React.useState(valueDefault);
  const [loading, setLoading] = React.useState(false);
  const onChange = (v, name) => {
    setData({...data, [name]: v});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onSuccess(data);
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(FormUI, {
    disabled: loading,
    data,
    onChange
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: loading,
    type: "submit"
  }, "Submit"));
};
export default Form;
