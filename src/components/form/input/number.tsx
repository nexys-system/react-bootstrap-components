import React from "react";
import * as T from "../../headless/form/type";
import { InputNumberGeneric } from "../generic/number";

const InputUI = (
  { value, onChange, errors, disabled, placeholder }: T.InputProps<string> // here string because the conversion to `number` happens at the outer level (generic component)
) => (
  <input
    className={
      "form-control" + (errors && errors.length > 0 ? "  is-invalid" : "")
    }
    disabled={disabled}
    placeholder={placeholder}
    type="text" // do not use number because it has issues with decimal numbers
    value={value}
    onChange={(v) => onChange(v.target.value)}
  />
);

const InputNumber = InputNumberGeneric(InputUI);

export default InputNumber;
