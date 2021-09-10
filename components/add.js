import React from "../_snowpack/pkg/react.js";
import {useHistory} from "../_snowpack/pkg/react-router-dom.js";
const submitLabelDefault = "Add";
const Add = (insert, Form, redirectUrl) => ({
  data: dataIn = {},
  submitLabel = submitLabelDefault
}) => {
  const history = useHistory();
  const handleSubmit = (data) => insert(data).then((_x) => {
    history.push(redirectUrl);
  });
  return /* @__PURE__ */ React.createElement(Form, {
    valueDefault: dataIn,
    onSuccess: handleSubmit
  });
};
export default Add;
