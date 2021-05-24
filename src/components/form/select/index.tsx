import React from "react";
import * as T from "../type";

const getValue = <A extends number | string>(
  v: string | undefined
): A | undefined => {
  if (v === "" || v === undefined) {
    return undefined;
  }

  const vn = Number(v);
  if (isNaN(vn)) {
    return v as A;
  }

  return vn as A;
};

export const Select = <A extends number | string>({
  options,
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
}: {
  options: { id: A; name: string }[];
} & T.InputProps<A>) => (
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
