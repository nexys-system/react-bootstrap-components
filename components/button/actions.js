import React from "../../_snowpack/pkg/react.js";
import Btn from "./btn.js";
import Icon from "../icon.js";
const actionToIcon = (action) => {
  switch (action) {
    case "back":
      return "arrow-left";
    default:
      return action;
  }
};
const actionToText = (action) => {
  switch (action) {
    case "back":
      return "Back";
    case "edit":
      return "Edit";
    default:
      return action;
  }
};
export const BtnAction = ({
  link,
  onClick,
  action
}) => {
  const content = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, {
    name: actionToIcon(action)
  }), " ", actionToText(action));
  return /* @__PURE__ */ React.createElement(Btn, {
    onClick,
    link
  }, content);
};
export const BtnBack = ({link, onClick}) => /* @__PURE__ */ React.createElement(BtnAction, {
  action: "back",
  onClick,
  link
});
export const BtnEdit = ({
  link,
  onClick
}) => /* @__PURE__ */ React.createElement(BtnAction, {
  action: "edit",
  onClick,
  link
});
export default BtnAction;
