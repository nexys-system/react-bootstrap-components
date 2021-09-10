import React from "../../_snowpack/pkg/react.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.js";
import {LinkBack} from "../utils-ui.js";
import {getParamTyped} from "./utils.js";
const DetailLayout = ({
  title,
  backUrl,
  Detail,
  detailColWidth = 6,
  extras,
  paramType = "number"
}) => {
  const {id} = useParams();
  const nid = getParamTyped(paramType, id);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-" + detailColWidth
  }, /* @__PURE__ */ React.createElement("h2", null, title), /* @__PURE__ */ React.createElement(Detail, {
    id: nid
  })), extras && extras.map((ExtraUnit, i) => /* @__PURE__ */ React.createElement("div", {
    key: i,
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement(ExtraUnit, {
    id: nid
  })))), backUrl && /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-12"
  }, /* @__PURE__ */ React.createElement(LinkBack, {
    link: backUrl
  }))));
};
export default DetailLayout;
