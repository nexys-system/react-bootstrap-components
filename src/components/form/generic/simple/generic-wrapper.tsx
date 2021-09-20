import React from "react";
import { FormContentProps, FormProps } from "../../../headless/form/type";

const Form =
  <A,>(FormUI: (props: FormContentProps<A>) => JSX.Element) =>
  ({ valueDefault = {}, onSuccess }: FormProps<A>) => {
    const [data, setData] = React.useState<any>(valueDefault);
    const [loading, setLoading] = React.useState<boolean>(false);

    const onChange = (v: string, name: keyof A) => {
      setData({ ...data, [name]: v });
    };

    const handleSubmit = (e: any) => {
      e.preventDefault();
      setLoading(true);

      onSuccess(data);
    };

    return (
      <form onSubmit={handleSubmit}>
        <FormUI disabled={loading} data={data} onChange={onChange} />

        <button
          className="btn btn-sm btn-primary"
          disabled={loading}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  };

export default Form;
