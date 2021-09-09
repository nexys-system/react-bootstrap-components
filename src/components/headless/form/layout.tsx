import React from "react";

export interface FormProps {
  onSubmit: () => void;
  children: JSX.Element[] | JSX.Element;
}

export const FormGeneric =
  (
    FormElement: ({
      handleSubmit,
      children,
    }: {
      handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
      children: JSX.Element[] | JSX.Element;
    }) => JSX.Element
  ) =>
  ({ onSubmit, children }: FormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit();
    };

    return <FormElement handleSubmit={handleSubmit}>{children}</FormElement>;
  };

export const FormElementDefault = ({
  handleSubmit,
  children,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: JSX.Element[] | JSX.Element;
}): JSX.Element => <form onSubmit={handleSubmit}>{children}</form>;

export const FormDefault = FormGeneric(FormElementDefault);
