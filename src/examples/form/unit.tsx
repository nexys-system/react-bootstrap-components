import React from "react";
import * as Form from "../../components/form";
import * as T from "./type";

const FormUnit = <A,>({
  fd,
  errors,
  value,
  onChange,
  disabled,
  options,
}: {
  fd: T.FormDef<A>;
  errors?: string[];
  value: any;
  disabled: boolean;
  onChange: (v: any) => void;
  options?: { id: number; name: string }[];
}) => {
  const commonProps = { errors, value, onChange, disabled };

  switch (fd.uiType) {
    case T.FormType.Text:
      return <Form.Input.Text {...commonProps} />;
    case T.FormType.Number:
      return <Form.Input.Number {...commonProps} />;
    case T.FormType.Select:
      return <Form.Input.Select.Scalar {...commonProps} options={options} />;
  }
};

export default FormUnit;
