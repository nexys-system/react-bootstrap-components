import React from "../_snowpack/pkg/react.js";
import Loader from "./loader.js";
export const WLoader = (Loader2) => ({
  getData,
  Component
}) => {
  const [data, setData] = React.useState(void 0);
  if (data !== void 0) {
    return /* @__PURE__ */ React.createElement(Component, {
      data
    });
  }
  getData().then(setData);
  return /* @__PURE__ */ React.createElement(Loader2, null);
};
export default WLoader(Loader);
