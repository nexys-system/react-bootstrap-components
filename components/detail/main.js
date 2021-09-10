import React from "../../_snowpack/pkg/react.js";
import ToggleGeneric from "../toggle.js";
import ViewGeneric from "../view.js";
import EditGeneric from "../edit/index.js";
import DeleteGeneric from "../delete.js";
import WLoader from "../w-loader.js";
const Detail = (Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrl, showToggle = true) => {
  const detailWOptions = async (id) => {
    const data = await detail(id);
    const options = getOptions ? await getOptions() : new Map();
    return {data, options};
  };
  const Delete = deleteById ? DeleteGeneric(deleteById, redirectUrl) : () => /* @__PURE__ */ React.createElement(React.Fragment, null);
  const Main = getMain(showToggle, viewFields, Form, redirectUrl, update);
  getOptions && getOptions();
  const EditLoader = ({id}) => WLoader({
    Component: ({
      data
    }) => /* @__PURE__ */ React.createElement(Main, {
      id,
      data: data.data,
      formOptions: data.options
    }),
    getData: () => detailWOptions(id)
  });
  return ({id}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(EditLoader, {
    id
  }), " ", /* @__PURE__ */ React.createElement(Delete, {
    id
  }));
};
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
export default Detail;
