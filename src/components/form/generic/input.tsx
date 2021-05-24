import React from "react";

import * as T from "./type";

import * as Inputs from "../input";
import * as Select from "../select";

interface InputProps<A> {
  onChange: (v: A) => void;
  value?: A;
  errors?: string[];
}

interface SelectProps<A> extends InputProps<A> {
  options?: { id: number; name: string }[];
}

const GenericInput = <A,>({
  type,
  onChange,
  value,
  options,
  errors,
}: {
  type: T.TypeUnit;
} & SelectProps<A>) => {
  switch (type) {
    case "category":
      if (!options) {
        throw Error("options were not given");
      }
      return (
        <Select.default
          options={options}
          value={value as any as number | string}
          onChange={onChange as any}
          errors={errors}
        />
      );
    case "number":
      return (
        <Inputs.Number
          value={value as any}
          onChange={onChange as any}
          errors={errors}
        />
      );
    default:
      return (
        <Inputs.Text
          value={value as any}
          onChange={onChange as any}
          errors={errors}
        />
      );
  }
};

export default GenericInput;
