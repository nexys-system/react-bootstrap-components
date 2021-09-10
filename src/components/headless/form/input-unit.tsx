import React from "react";

import * as TT from "./type";

const InputUnitGeneric =
  (
    InputText: (a: TT.InputProps<string>) => JSX.Element,
    InputNumber: (a: TT.InputProps<number>) => JSX.Element,
    InputSwitch: (a: TT.InputProps<boolean>) => JSX.Element,
    InputSelectScalar: (a: TT.SelectProps<number | string>) => JSX.Element,
    InputSelectObject: (
      a: TT.SelectOptionSetProps<number | string>
    ) => JSX.Element
  ) =>
  ({ type, onChange, value, options, errors }: TT.InputUnitProps<any>) => {
    switch (type) {
      case TT.FormType.Select:
        if (!options) {
          throw Error("options were not given");
        }
        return (
          <InputSelectScalar
            options={options}
            value={value}
            onChange={onChange}
            errors={errors}
          />
        );
      case TT.FormType.SelectObject:
        if (!options) {
          throw Error("options were not given");
        }
        return (
          <InputSelectObject
            options={options}
            value={value}
            onChange={onChange}
            errors={errors}
          />
        );
      case TT.FormType.Number:
        return (
          <InputNumber value={value} onChange={onChange} errors={errors} />
        );
      case TT.FormType.Text:
        return (
          <InputText
            value={value as any}
            onChange={onChange as any}
            errors={errors}
          />
        );
      case TT.FormType.Switch:
        return (
          <InputSwitch value={value} onChange={onChange} errors={errors} />
        );
    }
  };

export default InputUnitGeneric;
