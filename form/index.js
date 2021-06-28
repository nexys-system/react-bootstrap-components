import React from "../_snowpack/pkg/react.js";
import Form from "./form.js";
import * as T from "./type.js";
import * as Ctx from "../components/notifications/context.js";
import {NotificationType} from "../components/notifications/type.js";
const formDef = [
  {
    name: "firstName",
    label: "FirstName",
    uiType: T.FormType.Text,
    optional: false
  },
  {name: "age", label: "Age", uiType: T.FormType.Number, optional: false}
];
export default () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState();
  const {setNotification} = Ctx.useToastContext();
  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      console.log("ds");
      setLoading(false);
      setErrors({
        firstName: ["sdf"]
      });
      setNotification({text: "my content", type: NotificationType.toast});
    }, 2e3);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Form"), /* @__PURE__ */ React.createElement(Form, {
    formDef,
    isLoading,
    onSuccess: handleSubmit,
    errors
  }));
};
