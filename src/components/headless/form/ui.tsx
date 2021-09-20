import React from "react";

import { InputUnitProps, WrapperProps, FormDef, FormUIProps } from "./type";

const FormGenericUI =
  <A,>(
    formDef: FormDef<A>[],
    Wrapper: (props: WrapperProps) => JSX.Element,
    BtnSubmit: (prop: { isLoading: boolean }) => JSX.Element,
    FormUnit: (props: InputUnitProps<A>) => JSX.Element
  ) =>
  ({ data, errors, onChange, disabled }: FormUIProps<A>) => {
    return (
      <>
        {formDef.map((fd, i) => {
          const name = fd.name;
          const errorUnit: string[] | undefined =
            errors && (errors as any)[name as any];
          //console.log(name, errorUnit);
          return (
            <Wrapper errors={errorUnit} key={i} label={fd.label}>
              <FormUnit
                type={fd.uiType}
                errors={errorUnit}
                value={data[fd.name] as any}
                onChange={(v) => onChange(fd.name as string, v)}
                options={fd.options}
                disabled={disabled}
              />
            </Wrapper>
          );
        })}
        <BtnSubmit isLoading={disabled} />
      </>
    );
  };

export default FormGenericUI;
