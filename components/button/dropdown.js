import React from "../../_snowpack/pkg/react.js";
export default ({
  label,
  options
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "dropdownMenuButton",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, label), /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdownMenuButton"
  }, options.map((op, i) => /* @__PURE__ */ React.createElement("a", {
    key: i,
    className: "dropdown-item",
    href: "#"
  }, op.name))));
};
