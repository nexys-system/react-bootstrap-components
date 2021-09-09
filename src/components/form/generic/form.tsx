import React from "react";

import Form from "../form";
import Wrapper from "../wrapper";
import * as T from "../../headless/form/type";
import GenericInput from "./input";

const GenericFrom = <A,>({
  data,
  structure,
  errors: pErrors = {},
  onSubmit,
}: T.FormProps<A>) => {
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
    <Form onSubmit={() => handleSubmit()}>
      <>
        {structure.map((structureUnit, i) => {
          const inputErrors: string[] | undefined =
            errors && errors[structureUnit.name];
          return (
            <Wrapper key={i} label={structureUnit.label} errors={inputErrors}>
              <GenericInput
                type={structureUnit.type || "string"}
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
      <Wrapper>
        <button type="submit" className={"btn btn-primary"}>
          Submit
        </button>
      </Wrapper>
    </Form>
  );
};

export default GenericFrom;
