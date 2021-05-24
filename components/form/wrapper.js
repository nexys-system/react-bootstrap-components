import React from "../../_snowpack/pkg/react.js";
export const Wrapper = ({
  label,
  info,
  children,
  errors
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", null, label), children, /* @__PURE__ */ React.createElement("small", {
    className: "form-text text-muted"
  }, info), errors && /* @__PURE__ */ React.createElement("div", {
    className: "invalid-feedback"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "list list-unstyled"
  }, errors.map((e, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, e)))));
};
export const Wrapper2 = ({
  label,
  children
}) => /* @__PURE__ */ React.createElement("div", {
  className: "col-auto"
}, label && /* @__PURE__ */ React.createElement("label", {
  className: "mr-sm-2"
}, label), children);
export default Wrapper;
