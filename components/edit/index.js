import React from "../../_snowpack/pkg/react.js";
import {useHistory} from "../../_snowpack/pkg/react-router-dom.js";
const Edit = (Form, update, redirectUrl) => ({id, data: dataIn, formOptions}) => {
  const history = useHistory();
  const handleSubmit = (data) => update(data, id).then(() => {
    history.push(redirectUrl);
  });
  return /* @__PURE__ */ React.createElement(Form, {
    valueDefault: dataIn,
    onSuccess: handleSubmit,
    options: formOptions
  });
};
export default Edit;
