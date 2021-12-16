import React from "../../../_snowpack/pkg/react.js";
import AddGeneric from "../add.js";
export const AddComponent = (Form, urlPrefix, crudInsert) => {
  if (!crudInsert) {
    return () => /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return AddGeneric(crudInsert, Form, urlPrefix);
};
