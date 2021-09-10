import React from "react";
import * as T from "./type";

export type BooleanInputProps = {
  setToggle: () => void;
  checked: boolean;
} & Pick<T.InputProps<boolean>, "errors" | "disabled">;

const getCheckedValue = (value?: boolean): boolean => {
  if (typeof value === "boolean") {
    return value;
  }

  return false;
};

const InputBooleanGeneric =
  (UI: (props: BooleanInputProps) => JSX.Element) =>
  ({ value, disabled, onChange, errors }: T.InputProps<boolean>) => {
    return (
      <UI
        checked={getCheckedValue(value)}
        setToggle={() => onChange(!value)}
        errors={errors}
        disabled={disabled}
      />
    );
  };

export default InputBooleanGeneric;
