import React from "react";
import * as T from "../../headless/form/type";
import { acceptDecimalValue } from "./utils";

export const InputNumberGeneric =
  (
    UI: (props: T.InputProps<string>) => JSX.Element,
    acceptNumericValue: (v: string) => boolean = acceptDecimalValue // by default accept decimal values, this function here can be replaced with amything
  ) =>
  (p: T.InputProps<number>) => {
    const [value, setValue] = React.useState<string>(
      p.value ? p.value.toString() : ""
    );

    const handleChange = (s: string) => {
      const v = Number(s);

      if (acceptNumericValue(s)) {
        setValue(s);
      }

      if (!isNaN(v)) {
        p.onChange(v);
      }

      if (s === "") {
        p.onChange(undefined);
      }
    };

    return (
      <UI
        disabled={p.disabled}
        placeholder={p.placeholder}
        value={value}
        onChange={handleChange}
        errors={p.errors}
      />
    );
  };
