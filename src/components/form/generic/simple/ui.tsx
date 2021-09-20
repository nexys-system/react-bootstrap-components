import React from "react";

import Wrapper from "../../wrapper";
import InputGeneric from "../input";
import { FormContentProps, FormDef } from "../../../headless/form/type";

const FormUI =
  <T,>(defs: FormDef<T>[]) =>
  ({ disabled, data, onChange, options }: FormContentProps<T>) =>
    (
      <>
        {defs.map(({ label, name, uiType }, i) => {
          return (
            <Wrapper key={i} label={label || (name as string)}>
              <InputGeneric
                type={uiType}
                options={options ? options.get(name) : []}
                disabled={disabled}
                value={data[name] as any}
                onChange={(v) => onChange(v, name)}
              />
            </Wrapper>
          );
        })}
      </>
    );

export default FormUI;
