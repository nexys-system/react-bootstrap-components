import React from "../_snowpack/pkg/react.js";
import ToggleGeneric from "./headless/toggle2.js";
const ToggleLayout = ({isEdit, setEdit, children}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setEdit(!isEdit),
    className: "btn btn-sm btn-secondary"
  }, isEdit ? "Back to View" : "Edit"));
};
const Toggle = ToggleGeneric(ToggleLayout);
export default Toggle;
