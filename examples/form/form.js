import React from "../../_snowpack/pkg/react.js";
import * as Form from "../../components/form/index.js";
import FormUnit from "./unit.js";
import * as V from "../../_snowpack/pkg/@nexys/validation.js";
import * as U from "./utils.js";
const FormGenerator = ({
  formDef,
  onSuccess,
  isLoading = false,
  valueDefault = {},
  errors: errorsDefault,
  submit = {label: "Submit"}
}) => {
  const [data, setData] = React.useState(valueDefault);
  const [errors, setErrors] = React.useState(errorsDefault);
  React.useEffect(() => {
    setErrors(errorsDefault);
  }, [errorsDefault]);
  const validator = U.generateValidatorFromDef(formDef);
  const handleSubmit = (event) => {
    event.preventDefault();
    const v = V.Main.checkObject(data, validator);
    setErrors(v);
    if (Object.values(v).length === 0) {
      onSuccess(data);
    }
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, formDef.map((fd, i) => {
    const name = fd.name;
    const errorUnit = errors && errors[name];
    return /* @__PURE__ */ React.createElement(Form.Wrapper, {
      errors: errorUnit,
      key: i,
      label: fd.label
    }, /* @__PURE__ */ React.createElement(FormUnit, {
      fd,
      errors: errorUnit,
      value: data[fd.name],
      onChange: (v) => setData({...data, [fd.name]: v}),
      options: fd.options,
      disabled: isLoading
    }));
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: isLoading,
    type: "submit",
    className: "btn btn-primary"
  }, isLoading && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "...Loading")), !isLoading && /* @__PURE__ */ React.createElement(React.Fragment, null, submit.label)));
};
export default FormGenerator;
