import React from "../../../../_snowpack/pkg/react.js";
import * as ViewGeneric from "../../../headless/view/index.js";
const Row = ({data, structureUnit}) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, structureUnit.label || structureUnit.name), /* @__PURE__ */ React.createElement("td", null, ViewGeneric.Utils.getValue(structureUnit, data)));
const Layout = ({children}) => /* @__PURE__ */ React.createElement("table", {
  className: "table table-striped"
}, /* @__PURE__ */ React.createElement("tbody", null, children));
const View = (props) => ViewGeneric.View(Layout, Row)(props);
export default View;
