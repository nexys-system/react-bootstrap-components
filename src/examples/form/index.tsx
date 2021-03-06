import React from "react";

import GForm from "../../components/form/generic/generator";

import * as V from "@nexys/validation";
import * as Ctx from "../../components/notifications/context";
import { NotificationType } from "../../components/notifications/type";
import { FormType, FormDef } from "../../components/headless/form/type";

enum DataCategory {
  one = 1,
  two = 2,
  three = 3,
}

interface Data {
  firstName: string;
  age: number;
  cat: DataCategory;
  catObject: { id: number };
  isAccept: boolean;
}

const formDef: FormDef<Data>[] = [
  {
    name: "firstName",
    label: "FirstName",
    uiType: FormType.Text,
    optional: false,
  },
  { name: "age", label: "Age", uiType: FormType.Number, optional: false },
  {
    name: "cat",
    label: "Category",
    uiType: FormType.Select,
    optional: false,
    options: [
      { id: 1, name: "cat #1" },
      { id: 2, name: "cat #2" },
    ],
  },
  {
    name: "catObject",
    label: "Category 2",
    uiType: FormType.SelectObject,
    optional: false,
    options: [
      { id: 1, name: "cat #1" },
      { id: 2, name: "cat #2" },
    ],
  },
  {
    name: "isAccept",
    label: "Accept conditions",
    uiType: FormType.Switch,
    optional: false,
  },
];

const Form = GForm(formDef);
export default () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<V.Type.ErrorOut | V.Type.Error>();
  const { setNotification } = Ctx.useToastContext();

  const handleSubmit = async (v: Data) => {
    console.log(v);
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
      <Form isLoading={isLoading} onSuccess={handleSubmit} errors={errors} />
    </>
  );
};
