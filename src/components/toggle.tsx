import React from "react";

import ToggleGeneric from "./headless/toggle/toggle";
import { ToggleLayoutProps } from "./headless/toggle/type";

const ToggleLayout = ({ isEdit, setEdit, children }: ToggleLayoutProps) => {
  return (
    <>
      {children}
      <button
        onClick={() => setEdit(!isEdit)}
        className={"btn btn-sm btn-secondary"}
      >
        {isEdit ? "Back to View" : "Edit"}
      </button>
    </>
  );
};

const Toggle = ToggleGeneric(ToggleLayout);

export default Toggle;
