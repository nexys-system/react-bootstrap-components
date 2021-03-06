import React from "react";
import * as T from "../../../headless/form/type";
import { getValue } from "../../../headless/form/utils";

export const Select = <Id extends number | string>({
  options,
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
}: {
  options: { id: Id; name: string }[];
} & T.InputProps<Id>) => (
  <select
    className={
      "form-control" + (errors && errors.length > 0 ? "  is-invalid" : "")
    }
    defaultValue={value}
    onChange={(v) => onChange(getValue(v.target.value))}
  >
    <option value={""}></option>
    {options.map(({ id, name }, i) => (
      <option key={i} value={id}>
        {name}
      </option>
    ))}
  </select>
);

export default Select;
