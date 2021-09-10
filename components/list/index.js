import React from "../../_snowpack/pkg/react.js";
import Table from "../table/index.js";
import * as UtilsUI from "../utils-ui.js";
import ListLayout from "./layout.js";
const getDefWEdit = (def, editLink) => {
  if (!editLink) {
    return def;
  }
  const defEdit = {
    name: "id",
    render: (x) => /* @__PURE__ */ React.createElement(UtilsUI.EditBtn, {
      link: editLink(x.id)
    })
  };
  return [...def, defEdit];
};
const List = ({
  getData,
  def,
  addLink,
  editLink,
  config
}) => /* @__PURE__ */ React.createElement(ListLayout, {
  Table: ({data}) => /* @__PURE__ */ React.createElement(Table, {
    data,
    def: getDefWEdit(def, editLink),
    config
  }),
  addLink,
  getData
});
export default List;
