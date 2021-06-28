import React from "./_snowpack/pkg/react.js";
import {title, github} from "./config.js";
import {Link} from "./_snowpack/pkg/react-router-dom.js";
import * as Links from "./links.js";
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("p", null, "Examples below"), /* @__PURE__ */ React.createElement("ul", null, Links.menus.map((menu) => {
  return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: menu.link
  }, menu.name));
})), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
  href: github.url
}, /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-code"
}), " Source"), " available under MIT license. Contributions are welcome."));
