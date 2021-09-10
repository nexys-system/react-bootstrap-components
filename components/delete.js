import React from "../_snowpack/pkg/react.js";
import HeadlessDelete from "./headless/delete.js";
const DeleteBtn = ({onClick}) => {
  return /* @__PURE__ */ React.createElement("button", {
    onClick,
    className: "btn btn-sm btn-danger"
  }, "Delete");
};
const DeleteGeneric = HeadlessDelete(DeleteBtn);
export default DeleteGeneric;
