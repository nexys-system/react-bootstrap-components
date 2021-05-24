import React from "../_snowpack/pkg/react.js";
import {BtnBack} from "../components/button/actions.js";
const Layout = ({
  title,
  children
}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("div", null, children), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(BtnBack, {
  link: "/example"
})));
export default Layout;
