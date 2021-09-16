import React from "../../_snowpack/pkg/react.js";
import {useHistory} from "../../_snowpack/pkg/react-router-dom.js";
const Add = (insert, Form, redirectUrl) => ({data = {}}) => {
  const history = useHistory();
  const handleSubmit = (data2) => insert(data2).then((_x) => {
    history.push(redirectUrl);
  });
  return /* @__PURE__ */ React.createElement(Form, {
    valueDefault: data,
    onSuccess: handleSubmit
  });
};
export default Add;
