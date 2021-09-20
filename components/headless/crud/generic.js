import React from "../../../_snowpack/pkg/react.js";
import {Route, Switch} from "../../../_snowpack/pkg/react-router-dom.js";
import AddGeneric from "../add.js";
export const AddRoute = (Form, urlPrefix, addLink, crudInsert) => {
  if (!crudInsert) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  const Add = AddGeneric(crudInsert, Form, urlPrefix);
  return /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: addLink,
    component: Add
  });
};
export const CrudGeneric = (ListGeneric, DetailGeneric, FormWDef) => (def, defDetail, viewFields, urlPrefix, crud, editTitle = "Edit", extras, showEditToggle = true) => {
  const Form = FormWDef(defDetail);
  return CrudGenericWForm(ListGeneric, DetailGeneric, Form)(def, viewFields, urlPrefix, crud, editTitle, extras, showEditToggle);
};
export const CrudGenericWForm = (ListGeneric, DetailGeneric, Form) => (def, viewFields, urlPrefix, crud, editTitle = "Edit", extras, showEditToggle = true) => {
  const addLink = urlPrefix + "/add";
  const editLink = (childId) => urlPrefix + "/" + childId + "/edit";
  const redirectUrl = urlPrefix;
  const backUrl = urlPrefix;
  const List = () => /* @__PURE__ */ React.createElement(ListGeneric, {
    editLink,
    addLink,
    getData: crud.list,
    def
  });
  const PreDetail = DetailGeneric(Form, viewFields, {update: crud.update, deleteById: crud.deleteById, detail: crud.detail}, redirectUrl, showEditToggle);
  const Detail = () => /* @__PURE__ */ React.createElement(PreDetail, {
    backUrl,
    title: editTitle,
    extras: extras ? extras.map(({Component}) => ({id}) => /* @__PURE__ */ React.createElement(Component, {
      data: id
    })) : void 0
  });
  return () => /* @__PURE__ */ React.createElement(Switch, null, AddRoute(Form, urlPrefix, addLink, crud.insert), /* @__PURE__ */ React.createElement(Route, {
    path: editLink(":id"),
    component: Detail
  }), /* @__PURE__ */ React.createElement(Route, {
    path: urlPrefix,
    component: List
  }));
};
export default CrudGeneric;
