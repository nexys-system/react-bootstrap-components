import React from "../../_snowpack/pkg/react.js";
import * as Form from "../../components/form/index.js";
import * as T from "./type.js";
const FormUnit = ({
  fd,
  errors,
  value,
  onChange,
  disabled,
  options
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
    case T.FormType.Select:
      return /* @__PURE__ */ React.createElement(Form.Input.Select.Scalar, {
        ...commonProps,
        options
      });
  }
};
export default FormUnit;
