import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import Icon from "./icon.js";
const LinkBtn = ({
  link,
  children
}) => /* @__PURE__ */ React.createElement(Link, {
  className: "float-right",
  to: link
}, children);
export const LinkAdd = ({link}) => /* @__PURE__ */ React.createElement(LinkBtn, {
  link
}, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, {
  name: "plus"
}), " Add"));
export const LinkBack = ({link}) => /* @__PURE__ */ React.createElement(LinkBtn, {
  link
}, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, {
  name: "arrow-left"
}), " Back"));
