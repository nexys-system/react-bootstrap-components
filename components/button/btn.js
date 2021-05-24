import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
const Btn = ({
  children,
  link,
  onClick
}) => {
  const className = "btn btn-secondary btn-sm";
  if (link) {
    return /* @__PURE__ */ React.createElement(Link, {
      to: link,
      type: "button",
      className
    }, children);
  }
  if (onClick) {
    return /* @__PURE__ */ React.createElement("button", {
      onClick,
      type: "button",
      className
    }, children);
  }
  throw Error("btn action: either onclick or link must be given");
};
export default Btn;
