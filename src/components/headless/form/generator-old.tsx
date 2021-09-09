import React from "react";

import * as T from "./type";
import { FormProps } from "./layout";

const FormGeneric =
  <A,>(
    SubmitBtn: () => JSX.Element,
    Wrapper: (p: T.WrapperProps) => JSX.Element,
    FormLayout: (props: FormProps) => JSX.Element,
    GenericInput: (props: T.InputUnitProps<any>) => JSX.Element
  ) =>
  ({ data, structure, errors: pErrors = {}, onSubmit }: T.FormProps<A>) => {
    const [form, setForm] = React.useState<Partial<A>>(data);
    const [errors, setErrors] = React.useState(pErrors);

    const handleSubmit = async () => {
      try {
        await onSubmit(form);
      } catch (err) {
        console.log(err);
        setErrors(err);
      }
    };

    return (
      <FormLayout onSubmit={() => handleSubmit()}>
        <>
          {structure.map((structureUnit, i) => {
            const inputErrors: string[] | undefined =
              errors && errors[structureUnit.name];
            return (
              <Wrapper key={i} label={structureUnit.label} errors={inputErrors}>
                <GenericInput
                  type={structureUnit.uiType || T.FormType.Text}
                  value={(form[structureUnit.name] as any) || ""}
                  onChange={(value) =>
                    setForm({ ...form, [structureUnit.name]: value })
                  }
                  options={structureUnit.options}
                  errors={inputErrors}
                />
              </Wrapper>
            );
          })}
        </>
        <SubmitBtn />
      </FormLayout>
    );
  };

export default FormGeneric;
