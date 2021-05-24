import React from "../../../../_snowpack/pkg/react.js";
import View from "../view/index.js";
import GenericForm from "../form.js";
import {BtnBack, BtnEdit} from "../../../button/actions.js";
const Toggle = ({data, structure, onSubmit}) => {
  const [isEdit, setEdit] = React.useState(false);
  const handleSubmit = async (data2) => onSubmit(data2).then((x) => {
    setEdit(false);
  });
  if (isEdit) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GenericForm, {
      structure,
      data,
      onSubmit: handleSubmit
    }), /* @__PURE__ */ React.createElement(BtnBack, {
      onClick: () => setEdit(false)
    }));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(View, {
    data,
    structure
  }), /* @__PURE__ */ React.createElement(BtnEdit, {
    onClick: () => setEdit(true)
  }));
};
export default Toggle;
