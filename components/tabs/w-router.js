import React from "../../_snowpack/pkg/react.js";
import {Switch, Route, Link, useLocation} from "../../_snowpack/pkg/react-router-dom.js";
import * as U from "./utils.js";
const Nav = ({navs}) => /* @__PURE__ */ React.createElement("ul", {
  className: "nav nav-tabs"
}, navs.map((nav, i) => {
  const {pathname} = useLocation();
  const isSelected = U.getIsSelected(pathname, nav.path, navs);
  return /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: `nav-link ${isSelected ? "active" : ""}`,
    to: nav.path
  }, nav.label));
}));
const Router = ({navs}) => /* @__PURE__ */ React.createElement(Switch, null, navs.map((l, i) => /* @__PURE__ */ React.createElement(Route, {
  key: i,
  path: l.path,
  component: l.Component
})));
export default ({
  navs,
  urlPrefix = ""
}) => {
  const list = navs.map((x) => {
    const path = U.toHref(x, urlPrefix);
    return {path, ...x};
  });
  const listRouter = [...list].sort((a, b) => b.path.length - a.path.length);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, {
    navs: list
  }), /* @__PURE__ */ React.createElement(Router, {
    navs: listRouter
  }));
};
