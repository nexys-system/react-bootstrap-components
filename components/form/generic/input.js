import React from "../../../_snowpack/pkg/react.js";
import * as Inputs from "../input/index.js";
const GenericInput = ({
  type,
  onChange,
  value,
  options,
  errors
}) => {
  switch (type) {
    case "category":
      if (!options) {
        throw Error("options were not given");
      }
      return /* @__PURE__ */ React.createElement(Inputs.Select.Scalar, {
        options,
        value,
        onChange,
        errors
      });
    case "number":
      return /* @__PURE__ */ React.createElement(Inputs.Number, {
        value,
        onChange,
        errors
      });
    default:
      return /* @__PURE__ */ React.createElement(Inputs.Text, {
        value,
        onChange,
        errors
      });
  }
};
export default GenericInput;
