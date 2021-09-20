import React from "react";

import * as Validation from "@nexys/validation";
import { FormProps, FormUIProps } from "./type";

const FormGeneratorWithoutDef =
  <A,>(FormUI: (p: FormUIProps<A>) => JSX.Element) =>
  ({
    validator,
    onSuccess,
    isLoading = false,
    valueDefault = {},
    errors: errorsDefault,
  }: Omit<FormProps<A>, "formDef"> & {
    validator?: Validation.Type.Shape;
  }) => {
    const [data, setData] = React.useState<Partial<A>>(valueDefault);
    const [errors, setErrors] = React.useState<
      Validation.Type.ErrorOut | Validation.Type.Error | undefined
    >(errorsDefault);

    React.useEffect(() => {
      setErrors(errorsDefault);
    }, [errorsDefault]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      // if validator is defined, do client side check
      // else simply invoke onSuccess
      if (validator) {
        const v = Validation.Main.checkObject(data, validator);
        // console.log(v);
        setErrors(v);

        // no errors found
        if (Object.values(v).length === 0) {
          //
          //alert(JSON.stringify(v));

          onSuccess(data as A);
        }
      } else {
        onSuccess(data as A);
      }
    };

    //console.log({ errors });

    return (
      <form onSubmit={handleSubmit}>
        <FormUI
          errors={errors}
          data={data}
          disabled={isLoading}
          onChange={(name, value) => setData({ ...data, [name]: value })}
        />
      </form>
    );
  };

export default FormGeneratorWithoutDef;
