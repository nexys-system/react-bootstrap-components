import React from "../../_snowpack/pkg/react.js";
import Form from "./form.js";
import * as T from "./type.js";
import * as Ctx from "../../components/notifications/context.js";
import {NotificationType} from "../../components/notifications/type.js";
var DataCategory;
(function(DataCategory2) {
  DataCategory2[DataCategory2["one"] = 1] = "one";
  DataCategory2[DataCategory2["two"] = 2] = "two";
  DataCategory2[DataCategory2["three"] = 3] = "three";
})(DataCategory || (DataCategory = {}));
const formDef = [
  {
    name: "firstName",
    label: "FirstName",
    uiType: T.FormType.Text,
    optional: false
  },
  {name: "age", label: "Age", uiType: T.FormType.Number, optional: false},
  {
    name: "cat",
    label: "Category",
    uiType: T.FormType.Select,
    optional: false,
    options: [
      {id: 1, name: "cat #1"},
      {id: 2, name: "cat #2"}
    ]
  }
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
