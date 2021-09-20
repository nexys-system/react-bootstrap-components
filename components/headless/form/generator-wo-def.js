import React from "../../../_snowpack/pkg/react.js";
import * as Validation from "../../../_snowpack/pkg/@nexys/validation.js";
const FormGeneratorWithoutDef = (FormUI) => ({
  validator,
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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator) {
      const v = Validation.Main.checkObject(data, validator);
      setErrors(v);
      if (Object.values(v).length === 0) {
        onSuccess(data);
      }
    } else {
      onSuccess(data);
    }
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(FormUI, {
    errors,
    data,
    disabled: isLoading,
    onChange: (name, value) => setData({...data, [name]: value})
  }));
};
export default FormGeneratorWithoutDef;
