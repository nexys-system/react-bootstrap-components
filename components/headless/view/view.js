import React from "../../../_snowpack/pkg/react.js";
const ViewGeneric = (Layout, Row) => ({data, structure}) => /* @__PURE__ */ React.createElement(Layout, null, structure.map((structureUnit, i) => /* @__PURE__ */ React.createElement(Row, {
  structureUnit,
  data,
  key: i
})));
export default ViewGeneric;
