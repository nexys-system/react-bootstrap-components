import React from "./_snowpack/pkg/react.js";
import {Link} from "./_snowpack/pkg/react-router-dom.js";
import {title, github} from "./config.js";
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Link, {
  to: "/example"
}, "Examples")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
  href: github.url
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-code"
}), " Source"), " available under MIT license. Contributions are welcome."));
