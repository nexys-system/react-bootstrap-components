import React from "../../../_snowpack/pkg/react.js";
import {isNullType} from "./utils.js";
export const WLoader = (Loader, nullPlaceholder = "null") => ({
  getData,
  Component
}) => {
  const [data, setData] = React.useState(nullPlaceholder);
  if (isNullType(data, nullPlaceholder)) {
    return /* @__PURE__ */ React.createElement(Component, {
      data
    });
  }
  getData().then(setData);
  return /* @__PURE__ */ React.createElement(Loader, null);
};
export default WLoader;
