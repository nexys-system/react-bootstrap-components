import React from "../../_snowpack/pkg/react.js";
const ToggleGeneric = (GenericForm, formDef, View, BtnBack, BtnEdit) => ({data, onSuccess}) => {
  const [isEdit, setEdit] = React.useState(false);
  const handleSubmit = async (data2) => onSuccess(data2).then((x) => {
    setEdit(false);
  });
  const Form = GenericForm(formDef);
  if (isEdit) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Form, {
      valueDefault: data,
      onSuccess: handleSubmit
    }), /* @__PURE__ */ React.createElement(BtnBack, {
      onClick: () => setEdit(false)
    }));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(View, {
    data,
    structure: formDef
  }), /* @__PURE__ */ React.createElement(BtnEdit, {
    onClick: () => setEdit(true)
  }));
};
export default ToggleGeneric;
