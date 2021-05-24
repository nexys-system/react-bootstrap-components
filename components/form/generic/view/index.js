import React from "../../../../_snowpack/pkg/react.js";
const View = ({
  data,
  structure
}) => {
  return /* @__PURE__ */ React.createElement("table", {
    className: "table table-striped"
  }, /* @__PURE__ */ React.createElement("tbody", null, structure.map((structureUnit, i) => /* @__PURE__ */ React.createElement("tr", {
    key: i
  }, /* @__PURE__ */ React.createElement("td", null, structureUnit.label || structureUnit.name), /* @__PURE__ */ React.createElement("td", null, data[structureUnit.name])))));
};
export default View;
