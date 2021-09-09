import React from "../../../_snowpack/pkg/react.js";
import * as V from "../../../_snowpack/pkg/@nexys/validation.js";
import * as U from "./utils.js";
const FormGenerator = (Wrapper, FormUnit, BtnSubmit) => ({
  formDef,
  onSuccess,
  isLoading = false,
  valueDefault = {},
  errors: errorsDefault
}) => {
  const [data, setData] = React.useState(valueDefault);
  const [errors, setErrors] = React.useState(errorsDefault);
  React.useEffect(() => {
    setErrors(errorsDefault);
  }, [errorsDefault]);
  const validator = U.generateValidatorFromDef(formDef);
  console.log(validator);
  console.log(JSON.stringify(data));
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
    return /* @__PURE__ */ React.createElement(Wrapper, {
      errors: errorUnit,
      key: i,
      label: fd.label
    }, /* @__PURE__ */ React.createElement(FormUnit, {
      type: fd.uiType,
      errors: errorUnit,
      value: data[fd.name],
      onChange: (v) => setData({...data, [fd.name]: v}),
      options: fd.options,
      disabled: isLoading
    }));
  }), /* @__PURE__ */ React.createElement(BtnSubmit, {
    isLoading
  }));
};
export default FormGenerator;
