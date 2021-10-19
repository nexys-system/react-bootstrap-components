import React from "../../../_snowpack/pkg/react.js";
import * as CoreList from "../../../_snowpack/pkg/@nexys/core-list.js";
const {getPagination} = CoreList.PaginationUtils;
const Pagination = ({n, nPerPage}) => {
  if (n === 0) {
    return null;
  }
  const {nPage} = getPagination(n, nPerPage);
  return /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Page navigation example"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "page-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "Previous")), /* @__PURE__ */ React.createElement("li", {
    className: "page-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement("li", {
    className: "page-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "2")), /* @__PURE__ */ React.createElement("li", {
    className: "page-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "page-link",
    href: "#"
  }, nPage)), /* @__PURE__ */ React.createElement("li", {
    className: "page-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "Next"))));
};
export default Pagination;
