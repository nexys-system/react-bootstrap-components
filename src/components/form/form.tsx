import React from "react";

export const Form = ({
  onSubmit,
  children,
}: {
  onSubmit: () => void;
  children: any; //JSX.Element[]; // JSX.Eleemtn //React.ReactChildren;
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*<div className="form-row align-items-center">*/}
      {children}
      {/*  </div>*/}
    </form>
  );
};

export default Form;
