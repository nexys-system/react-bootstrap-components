import React from "./_snowpack/pkg/react.js";
import {Route, Switch} from "./_snowpack/pkg/react-router-dom.js";
import Home from "./home.js";
import * as Links from "./links.js";
import Form from "./examples/form/index.js";
import Buttons from "./examples/buttons.js";
import Tabs from "./examples/tabs/index.js";
import FormContext from "./examples/form-context/index.js";
import List from "./examples/list/index.js";
import FormAdd from "./examples/form-add/index.js";
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Page Not Found"));
export default () => {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: Links.links.form.link,
    component: Form
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: Links.links.formAdd.link,
    component: FormAdd
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: Links.links.formContext.link,
    component: FormContext
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: Links.links.tabs.link,
    component: Tabs
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: Links.links.buttons.link,
    component: Buttons
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: Links.links.list.link,
    component: List
  }), /* @__PURE__ */ React.createElement(Route, {
    component: NotFound
  }));
};
