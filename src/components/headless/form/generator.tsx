import React from "react";

import { Main as ValidationMain, Type as VType } from "@nexys/validation";
import * as U from "./utils";
import { FormProps, InputUnitProps, WrapperProps } from "./type";

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
  }: FormProps<A>) => {
    const [data, setData] = React.useState<Partial<A>>(valueDefault);
    const [errors, setErrors] = React.useState<
      VType.ErrorOut | VType.Error | undefined
    >(errorsDefault);

    React.useEffect(() => {
      setErrors(errorsDefault);
    }, [errorsDefault]);

    const validator = U.generateValidatorFromDef(formDef);
    // console.log(validator);
    // console.log(JSON.stringify(data));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      const v = ValidationMain.checkObject(data, validator);
      // console.log(v);
      setErrors(v);

      // no errors found
      if (Object.values(v).length === 0) {
        //
        //alert(JSON.stringify(v));

        onSuccess(data as A);
      }
    };

    //console.log({ errors });

    return (
      <form onSubmit={handleSubmit}>
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
                onChange={(v) => setData({ ...data, [fd.name]: v })}
                options={fd.options}
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
