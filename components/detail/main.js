import React from "../../_snowpack/pkg/react.js";
import ToggleGeneric from "../toggle.js";
import ViewGeneric from "../view.js";
import EditGeneric from "../edit/index.js";
import DeleteGeneric from "../delete.js";
const DetailWExtras = (title, Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrl, showToggle = true, detailColWidth = 6, extras) => {
  const [data, setData] = React.useState("null");
  const detailWOptions = async (id) => {
    const data2 = await detail(id);
    const options = getOptions ? await getOptions() : new Map();
    return {data: data2, options};
  };
  const Delete = deleteById ? DeleteGeneric(deleteById, redirectUrl) : () => /* @__PURE__ */ React.createElement(React.Fragment, null);
  const Main = getMain(showToggle, viewFields, Form, redirectUrl, update);
  getOptions && getOptions();
  return ({id}) => {
    if (!isData(data)) {
      detailWOptions(id).then((data2) => setData(data2));
    }
    return /* @__PURE__ */ React.createElement("div", {
      className: "row"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "col-md-" + detailColWidth
    }, /* @__PURE__ */ React.createElement("h2", null, title), isData(data) ? /* @__PURE__ */ React.createElement(Main, {
      id,
      data: data.data,
      formOptions: data.options
    }) : /* @__PURE__ */ React.createElement(React.Fragment, null, "loading"), " ", /* @__PURE__ */ React.createElement(Delete, {
      id
    })), extras && extras.map((ExtraUnit2, i) => isData(data) ? /* @__PURE__ */ React.createElement("div", {
      key: i,
      className: `col-md-${ExtraUnit2.colSpan || 6}`
    }, /* @__PURE__ */ React.createElement(ExtraUnit2.Component, {
      data: data.data
    })) : /* @__PURE__ */ React.createElement(React.Fragment, null, "loading")));
  };
};
const isData = (d) => d !== "null";
const getMain = (showToggle, viewFields, Form, redirectUrl, update) => {
  const View = ViewGeneric(viewFields);
  if (!update) {
    return View;
  }
  const Edit = EditGeneric(Form, update, redirectUrl);
  if (showToggle) {
    return ToggleGeneric(Edit, View);
  }
  return Edit;
};
export default DetailWExtras;
