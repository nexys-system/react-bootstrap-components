import React from "react";

import * as V from "@nexys/validation";
import * as U from "./utils";
import { FormProps2, InputUnitProps, WrapperProps } from "./type";

const FormGenerator =
  <A,>(
    Wrapper: (props: WrapperProps) => JSX.Element,
    FormUnit: (props: InputUnitProps<A>) => JSX.Element,
    BtnSubmit: (prop: { isLoading: boolean }) => JSX.Element
  ) =>
  ({
    formDef,
    onSuccess,
    isLoading = false,
    valueDefault = {},
    errors: errorsDefault,
  }: FormProps2<A>) => {
    const [data, setData] = React.useState<Partial<A>>(valueDefault);
    const [errors, setErrors] = React.useState<
      V.Type.ErrorOut | V.Type.Error | undefined
    >(errorsDefault);

    React.useEffect(() => {
      setErrors(errorsDefault);
    }, [errorsDefault]);

    const validator = U.generateValidatorFromDef(formDef);

    const handleSubmit = (event: any): void => {
      event.preventDefault();

      const v = V.Main.checkObject(data, validator);
      setErrors(v);

      // no errors found
      if (Object.values(v).length === 0) {
        //
        //alert(JSON.stringify(v));
        //console.log(JSON.stringify(data));
        onSuccess(data as A);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        {formDef.map((fd, i) => {
          const name = fd.name;
          const errorUnit: string[] | undefined =
            errors && (errors as any)[name as any];
          return (
            <Wrapper errors={errorUnit} key={i} label={fd.label}>
              <FormUnit
                type={fd.uiType}
                errors={errorUnit}
                value={data[fd.name] as any}
                onChange={(v) => setData({ ...data, [fd.name]: v })}
                options={fd.options as any}
                disabled={isLoading}
              />
            </Wrapper>
          );
        })}

        <BtnSubmit isLoading={isLoading} />
      </form>
    );
  };

export default FormGenerator;
