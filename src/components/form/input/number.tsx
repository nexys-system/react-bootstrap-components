import React from "react";
import * as T from "../headless/type";

export const InputNumber = ({
  value,
  onChange,
  errors,
  disabled,
}: T.InputProps<number>) => (
  <input
    className={
      "form-control" + (errors && errors.length > 0 ? "  is-invalid" : "")
    }
    disabled={disabled}
    type="number"
    value={value || ""}
    onChange={(v) =>
      v.target.value === ""
        ? onChange(undefined)
        : onChange(Number(v.target.value))
    }
  />
);

export default InputNumber;
