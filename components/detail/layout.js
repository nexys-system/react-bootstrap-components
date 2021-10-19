import React from "../../_snowpack/pkg/react.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.js";
import {getParamTyped} from "../headless/detail/utils.js";
import {LinkBack} from "../utils-ui.js";
const DetailLayout = ({
  backUrl,
  Detail,
  paramType = "number"
}) => {
  const {id} = useParams();
  const nid = getParamTyped(paramType, id);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Detail, {
    id: nid
  }), backUrl && /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-12"
  }, /* @__PURE__ */ React.createElement(LinkBack, {
    link: backUrl
  }))));
};
export default DetailLayout;
