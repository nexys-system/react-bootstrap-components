import React from "../../_snowpack/pkg/react.js";
import Table from "../table/index.js";
import * as UtilsUI from "../utils-ui.js";
import ListLayout from "./layout.js";
const List = ({
  getData,
  def,
  addLink,
  editLink
}) => {
  const d = {
    name: "id",
    render: (x) => /* @__PURE__ */ React.createElement(UtilsUI.EditBtn, {
      link: editLink(x.id)
    })
  };
  return /* @__PURE__ */ React.createElement(ListLayout, {
    Table: ({data}) => /* @__PURE__ */ React.createElement(Table, {
      data,
      def: [...def, d]
    }),
    addLink,
    getData
  });
};
export default List;
