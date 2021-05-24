import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import {Switch, Route} from "../_snowpack/pkg/react-router-dom.js";
import * as Pages from "./pages.js";
import Layout from "./layout.js";
const Home = () => {
  return /* @__PURE__ */ React.createElement("ul", null, Pages.pages.map((p, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, /* @__PURE__ */ React.createElement(Link, {
    to: Pages.toHref(p.name)
  }, p.name))));
};
const Routes = () => /* @__PURE__ */ React.createElement(Switch, null, Pages.pages.map((p, i) => /* @__PURE__ */ React.createElement(Route, {
  key: i,
  path: Pages.toHref(p.name),
  component: () => /* @__PURE__ */ React.createElement(Layout, {
    title: p.name
  }, /* @__PURE__ */ React.createElement(p.component, null))
})), /* @__PURE__ */ React.createElement(Route, {
  component: Home
}));
export default Routes;
