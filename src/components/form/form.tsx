import React from "react";

export const FormGeneric = (
  FormElement: ({
    onSubmit,
  }: {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }) => JSX.Element
) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //onSubmit();
  };

  return <FormElement onSubmit={handleSubmit} />;
};

export const Form = ({
  onSubmit,
  children,
}: {
  onSubmit: () => void;
  children: JSX.Element[] | JSX.Element;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
