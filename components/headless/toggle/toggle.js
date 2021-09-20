import React from "../../../_snowpack/pkg/react.js";
export const ToggleHeadless = (ToggleLayout) => (Edit, View) => ({id, data, formOptions}) => {
  const [isEdit, setEdit] = React.useState(false);
  return /* @__PURE__ */ React.createElement(ToggleLayout, {
    isEdit,
    setEdit
  }, isEdit ? /* @__PURE__ */ React.createElement(Edit, {
    id,
    data,
    formOptions
  }) : /* @__PURE__ */ React.createElement(View, {
    data
  }));
};
export default ToggleHeadless;
