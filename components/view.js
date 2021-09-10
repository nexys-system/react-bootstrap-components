import React from "../_snowpack/pkg/react.js";
const View = (fields) => ({data}) => /* @__PURE__ */ React.createElement("table", {
  className: "table table-striped"
}, /* @__PURE__ */ React.createElement("tbody", null, fields.map(([k, v], i) => /* @__PURE__ */ React.createElement("tr", {
  key: i
}, /* @__PURE__ */ React.createElement("td", null, k), /* @__PURE__ */ React.createElement("td", null, typeof v === "function" ? v(data) : data[v])))));
export default View;
