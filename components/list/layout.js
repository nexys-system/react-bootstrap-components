import React from "../../_snowpack/pkg/react.js";
import WLoader from "../w-loader.js";
import * as UtilsUi from "../utils-ui.js";
const ListLayout = ({
  Table,
  getData,
  addLink
}) => /* @__PURE__ */ React.createElement(React.Fragment, null, addLink && /* @__PURE__ */ React.createElement(UtilsUi.LinkAdd, {
  link: addLink
}), /* @__PURE__ */ React.createElement(WLoader, {
  getData,
  Component: Table
}));
export default ListLayout;
