import React from "react";
import * as T from "../type";

export const InputNumber = ({
  value,
  onChange,
  errors,
}: T.InputProps<number | undefined>) => (
  <input
    className={
      "form-control" + (errors && errors.length > 0 ? "  is-invalid" : "")
    }
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
