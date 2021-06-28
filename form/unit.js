import React from "../_snowpack/pkg/react.js";
import * as Form from "../components/form/index.js";
import * as T from "./type.js";
const FormUnit = ({
  fd,
  errors,
  value,
  onChange,
  disabled
}) => {
  const commonProps = {errors, value, onChange, disabled};
  switch (fd.uiType) {
    case T.FormType.Text:
      return /* @__PURE__ */ React.createElement(Form.Input.Text, {
        ...commonProps
      });
    case T.FormType.Number:
      return /* @__PURE__ */ React.createElement(Form.Input.Number, {
        ...commonProps
      });
  }
};
export default FormUnit;
