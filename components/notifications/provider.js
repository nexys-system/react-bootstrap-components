import React from "../../_snowpack/pkg/react.js";
import Ctx from "./context.js";
import Toast from "./toast/index.js";
import Banner from "./banner/index.js";
import {NotificationType} from "./type.js";
export const Provider = ({children}) => {
  const [notifications, setNotifications] = React.useState([]);
  const rmNotification = (idx) => {
    const ts = notifications.filter((_x, j) => j !== idx);
    setNotifications(ts);
  };
  const addToast = (t) => setNotifications([...notifications, t]);
  const banners = notifications.filter((x) => x.type === NotificationType.banner).map((x) => {
    return {text: x.text};
  });
  return /* @__PURE__ */ React.createElement(Ctx.Provider, {
    value: {setNotification: addToast, rmNotification, notifications}
  }, /* @__PURE__ */ React.createElement(Banner, null), children, /* @__PURE__ */ React.createElement(Toast, null));
};
export default Provider;
