import React from "react";
import * as T from "../../headless/form/type";

export const InputNumber = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  step,
}: T.InputProps<number> & { step?: number }) => (
  <input
    className={
      "form-control" + (errors && errors.length > 0 ? "  is-invalid" : "")
    }
    disabled={disabled}
    placeholder={placeholder}
    type="number"
    value={isNaN(Number(value)) ? "" : value}
    step={step}
    onChange={(v) =>
      v.target.value === ""
        ? onChange(undefined)
        : onChange(Number(v.target.value))
    }
  />
);

export default InputNumber;
