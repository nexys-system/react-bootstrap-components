import React from "react";

import Form from "./form";
import * as T from "./type";
import * as V from "@nexys/validation";
import * as Ctx from "../components/notifications/context";
import { NotificationType } from "../components/notifications/type";

interface Data {
  firstName: string;
  age: number;
}

const formDef: T.FormDef<Data>[] = [
  {
    name: "firstName",
    label: "FirstName",
    uiType: T.FormType.Text,
    optional: false,
  },
  { name: "age", label: "Age", uiType: T.FormType.Number, optional: false },
];

export default () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<V.Type.ErrorOut | V.Type.Error>();
  const { setNotification } = Ctx.useToastContext();

  const handleSubmit = async () => {
    setLoading(true);

    setTimeout(() => {
      console.log("ds");
      setLoading(false);
      setErrors({
        firstName: ["sdf"],
      });
      //setNotification({ text: "hello2", type: NotificationType.banner });
      setNotification({ text: "my content", type: NotificationType.toast });
    }, 2000);
  };

  return (
    <>
      <h1>Form</h1>
      <Form
        formDef={formDef}
        isLoading={isLoading}
        onSuccess={handleSubmit}
        errors={errors}
      />
    </>
  );
};
