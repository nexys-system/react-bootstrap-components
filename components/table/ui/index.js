import React from "../../../_snowpack/pkg/react.js";
import * as UIType from "../../../_snowpack/pkg/@nexys/core-list.js";
import LoaderMain from "../../loader/index.js";
const Loader = () => /* @__PURE__ */ React.createElement(LoaderMain, null);
const {paginationBoundaries} = UIType.PaginationUtils;
const Alert = ({
  children
}) => /* @__PURE__ */ React.createElement("div", {
  className: "alert"
}, children);
const GlobalSearch = (p) => /* @__PURE__ */ React.createElement("div", {
  className: "row"
}, /* @__PURE__ */ React.createElement("div", {
  className: "col-md-3"
}, /* @__PURE__ */ React.createElement("input", {
  placeholder: "Search",
  type: "text",
  className: "form-control",
  onChange: (x) => p.onChange({name: "globalSearch", value: x.target.value})
})));
const PopoverFilter = () => /* @__PURE__ */ React.createElement(React.Fragment, null);
const FilterUnit = () => /* @__PURE__ */ React.createElement(React.Fragment, null);
export const NoRow = (props) => {
  if (props.n > 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(Alert, {
    type: "warning"
  }, "No rows found");
};
export const PaginationWrapper = (props) => {
  return /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, props.children));
};
export const PaginationUnit = (props) => {
  const {isActive, isDisabled, children, onClick} = props;
  if (isDisabled) {
    return null;
  }
  const className = "page-item" + (isActive ? " active" : "") + (isDisabled ? " disabled" : "");
  return /* @__PURE__ */ React.createElement("li", {
    className
  }, /* @__PURE__ */ React.createElement("button", {
    className: "page-link",
    onClick
  }, children));
};
export const ColCell = (props) => {
  const {children, colSpan, style} = props;
  return /* @__PURE__ */ React.createElement("td", {
    colSpan,
    style
  }, children);
};
export const HeaderUnit = (props) => {
  const {children} = props;
  return /* @__PURE__ */ React.createElement("th", null, children);
};
const Icon = ({name}) => /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-" + name
});
export const OrderControllerUpAndDown = (props) => {
  return /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", {
    key: "asc",
    onClick: () => props.onClick(true)
  }, /* @__PURE__ */ React.createElement(ChevronUp, null)), /* @__PURE__ */ React.createElement("span", {
    key: "desc",
    onClick: () => props.onClick(false)
  }, /* @__PURE__ */ React.createElement(ChevronDown, null)));
};
const ChevronUp = () => /* @__PURE__ */ React.createElement(Icon, {
  name: "chevron-up"
});
const ChevronDown = () => /* @__PURE__ */ React.createElement(Icon, {
  name: "chevron-down"
});
const SortDefault = () => /* @__PURE__ */ React.createElement(Icon, {
  name: "arrow"
});
export const OrderController = (props) => {
  const {onClick, descAsc} = props;
  let Icon2 = SortDefault;
  if (descAsc !== null) {
    Icon2 = descAsc ? ChevronUp : ChevronDown;
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      cursor: "pointer",
      display: "inline-block",
      color: descAsc === null ? "#ccc" : "#000"
    },
    onClick: () => onClick(null)
  }, /* @__PURE__ */ React.createElement(Icon2, null));
};
export const ListWrapper = ({children}) => /* @__PURE__ */ React.createElement("div", {
  className: "table-responsive-sm"
}, children);
export const ListContainer = ({
  children,
  maxHeight
}) => /* @__PURE__ */ React.createElement("div", {
  className: "container",
  style: maxHeight ? {maxHeight} : void 0
}, /* @__PURE__ */ React.createElement("table", {
  className: "table table-striped"
}, children));
export const Row = ({children}) => /* @__PURE__ */ React.createElement("tr", null, children);
export const ListHeader = ({children}) => /* @__PURE__ */ React.createElement("thead", null, children);
export const ListBody = ({children}) => /* @__PURE__ */ React.createElement("tbody", null, children);
export const RecordInfo = (props) => {
  const {nPerPage, idx, n} = props;
  if (n === 0) {
    return null;
  }
  const {start, end} = paginationBoundaries(idx, nPerPage);
  return /* @__PURE__ */ React.createElement("p", {
    className: "pull-right"
  }, "Showing ", start + 1, " to ", Number(start) + Number(nPerPage) > n ? n : end, " of", " ", n, " entries");
};
export {FilterUnit, GlobalSearch, PopoverFilter, Loader};
