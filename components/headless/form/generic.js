import React from "../../../_snowpack/pkg/react.js";
import * as T from "./type.js";
const FormGeneric = (SubmitBtn, Wrapper, FormLayout, GenericInput) => ({data, structure, errors: pErrors = {}, onSubmit}) => {
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
  return /* @__PURE__ */ React.createElement(FormLayout, {
    onSubmit: () => handleSubmit()
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, structure.map((structureUnit, i) => {
    const inputErrors = errors && errors[structureUnit.name];
    return /* @__PURE__ */ React.createElement(Wrapper, {
      key: i,
      label: structureUnit.label,
      errors: inputErrors
    }, /* @__PURE__ */ React.createElement(GenericInput, {
      type: structureUnit.uiType || T.FormType.Text,
      value: form[structureUnit.name] || "",
      onChange: (value) => setForm({...form, [structureUnit.name]: value}),
      options: structureUnit.options,
      errors: inputErrors
    }));
  })), /* @__PURE__ */ React.createElement(SubmitBtn, null));
};
export default FormGeneric;
