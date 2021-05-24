import React from "../../_snowpack/pkg/react.js";
const Layout = ({
  title,
  subtitle,
  children
}) => /* @__PURE__ */ React.createElement("div", {
  className: "card"
}, /* @__PURE__ */ React.createElement("div", {
  className: "card-body"
}, title && /* @__PURE__ */ React.createElement("h5", {
  className: "card-title"
}, title), subtitle && /* @__PURE__ */ React.createElement("h6", {
  className: "card-subtitle mb-2 text-muted"
}, subtitle), children));
export default Layout;
