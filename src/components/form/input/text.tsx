import React from "react";
import * as T from "../../headless/form/type";

export const InputText = ({
  value,
  onChange,
  errors,
  placeholder,
  disabled,
}: T.InputProps<string>) => (
  <input
    className={
      "form-control" + (errors && errors.length > 0 ? "  is-invalid" : "")
    }
    disabled={disabled}
    placeholder={placeholder}
    type="text"
    value={value || ""}
    onChange={(v) =>
      v.target.value === "" ? onChange(undefined) : onChange(v.target.value)
    }
  />
);

export default InputText;
