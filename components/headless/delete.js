import React from "../../_snowpack/pkg/react.js";
import {useHistory} from "../../_snowpack/pkg/react-router-dom.js";
const confirmPromptMessageDefault = "Are you sure you would like to delete?";
const DeleteHeadless = (DeleteBtn) => (deleteById, redirectUrl, confirmPromptMessage = confirmPromptMessageDefault) => ({id}) => {
  const history = useHistory();
  const handleDelete = () => {
    if (confirm(confirmPromptMessage)) {
      deleteById(id);
      history.push(redirectUrl);
    }
  };
  return /* @__PURE__ */ React.createElement(DeleteBtn, {
    onClick: handleDelete
  });
};
export default DeleteHeadless;
