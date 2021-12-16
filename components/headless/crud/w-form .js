import React from "../../../_snowpack/pkg/react.js";
import {Route, Switch} from "../../../_snowpack/pkg/react-router-dom.js";
import * as U from "./utils.js";
export const CrudGenericWForm = (ListGeneric, DetailGeneric, Form) => (def, viewFields, urlPrefix, crud, extras, options = {}) => {
  const {showEditToggle = true, detailColWidth = 6, editTitle} = options;
  const addLink = urlPrefix + "/add";
  const editLink = (childId) => urlPrefix + "/" + childId + "/edit";
  const redirectUrl = urlPrefix;
  const backUrl = urlPrefix;
  const List = () => /* @__PURE__ */ React.createElement(ListGeneric, {
    editLink,
    addLink: crud.insert && addLink,
    getData: crud.list,
    def
  });
  const PreDetail = DetailGeneric(Form, viewFields, {update: crud.update, deleteById: crud.deleteById, detail: crud.detail}, redirectUrl, showEditToggle, detailColWidth, extras, editTitle);
  const Detail = () => /* @__PURE__ */ React.createElement(PreDetail, {
    backUrl
  });
  return () => /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: addLink,
    component: U.AddComponent(Form, urlPrefix, crud.insert)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: editLink(":id"),
    component: Detail
  }), /* @__PURE__ */ React.createElement(Route, {
    path: urlPrefix,
    component: List
  }));
};
export default CrudGenericWForm;
