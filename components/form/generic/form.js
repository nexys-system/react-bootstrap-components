import React from "../../../_snowpack/pkg/react.js";
import Form from "../form.js";
import Wrapper from "../wrapper.js";
import GenericInput from "./input.js";
const GenericFrom = ({
  data,
  structure,
  errors: pErrors = {},
  onSubmit
}) => {
  const [form, setForm] = React.useState(data);
  const [errors, setErrors] = React.useState(pErrors);
  const handleSubmit = async () => {
    try {
      await onSubmit(form);
    } catch (err) {
      console.log(err);
      setErrors(err);
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Form, {
    onSubmit: () => handleSubmit()
  }, structure.map((structureUnit, i) => {
    const inputErrors = errors && errors[structureUnit.name];
    return /* @__PURE__ */ React.createElement(Wrapper, {
      key: i,
      label: structureUnit.label,
      errors: inputErrors
    }, /* @__PURE__ */ React.createElement(GenericInput, {
      type: structureUnit.type || "string",
      value: form[structureUnit.name] || "",
      onChange: (value) => setForm({...form, [structureUnit.name]: value}),
      options: structureUnit.options,
      errors: inputErrors
    }));
  }), /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit"))));
};
export default GenericFrom;
