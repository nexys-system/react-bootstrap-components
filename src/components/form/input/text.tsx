import React from "react";
import * as T from "../type";

export const InputText = ({
  value,
  onChange,
  errors,
}: T.InputProps<string>) => (
  <input
    className={
      "form-control" + (errors && errors.length > 0 ? "  is-invalid" : "")
    }
    type="text"
    value={value}
    onChange={(v) =>
      v.target.value === "" ? onChange(undefined) : onChange(v.target.value)
    }
  />
);

export default InputText;
