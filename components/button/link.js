import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import Icon from "../icon.js";
const BtnLink = ({
  url,
  label,
  iconAppend,
  iconPrepend
}) => /* @__PURE__ */ React.createElement(Link, {
  to: url
}, /* @__PURE__ */ React.createElement("button", {
  className: "btn btn-secondary btn-sm"
}, iconPrepend && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, {
  name: iconPrepend
}), " "), label, iconAppend && /* @__PURE__ */ React.createElement(React.Fragment, null, " ", /* @__PURE__ */ React.createElement(Icon, {
  name: iconAppend
}))));
export default BtnLink;
