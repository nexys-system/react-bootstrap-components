import React from "react";

import { Wrapper } from "../index";
import FormUnit from "./input";

import * as V from "@nexys/validation";
import * as U from "../../headless/form/utils";
import { FormProps2 } from "../../headless/form/type";

const FormGenerator = <A,>({
  formDef,
  onSuccess,
  isLoading = false,
  valueDefault = {},
  errors: errorsDefault,
  submit = { label: "Submit" },
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
              options={fd.options}
              disabled={isLoading}
            />
          </Wrapper>
        );
      })}

      <button disabled={isLoading} type="submit" className={"btn btn-primary"}>
        {isLoading && (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="sr-only">...Loading</span>
          </>
        )}

        {!isLoading && <>{submit.label}</>}
      </button>
    </form>
  );
};

export default FormGenerator;
