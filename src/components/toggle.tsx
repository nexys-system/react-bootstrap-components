import React from "react";

import ToggleGeneric, { ToggleLayoutProps } from "./headless/toggle2";

const ToggleLayout = ({ isEdit, setEdit, children }: ToggleLayoutProps) => {
  return (
    <>
      {children}
      <button
        onClick={() => setEdit(!isEdit)}
        className={"btn btn-sm btn-secondary"}
      >
        {isEdit ? "back to View" : "Edit"}
      </button>
    </>
  );
};

const Toggle = ToggleGeneric(ToggleLayout);

export default Toggle;
