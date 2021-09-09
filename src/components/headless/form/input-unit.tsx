import React from "react";

import * as TT from "./type";

const InputUnitGeneric =
  <Id extends number | string>(
    InputText: (a: TT.InputProps<string>) => JSX.Element,
    InputNumber: (a: TT.InputProps<number>) => JSX.Element,
    InputSelectScalar: (a: TT.SelectProps<Id>) => JSX.Element
  ) =>
  ({ type, onChange, value, options, errors }: TT.InputUnitProps<Id>) => {
    switch (type) {
      case "category":
        if (!options) {
          throw Error("options were not given");
        }
        return (
          <InputSelectScalar
            options={options}
            value={value as any as Id}
            onChange={onChange as any}
            errors={errors}
          />
        );
      case "number":
        return (
          <InputNumber
            value={value as any}
            onChange={onChange as any}
            errors={errors}
          />
        );
      default:
        return (
          <InputText
            value={value as any}
            onChange={onChange as any}
            errors={errors}
          />
        );
    }
  };

export default InputUnitGeneric;
