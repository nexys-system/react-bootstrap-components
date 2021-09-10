import React from "react";
import { useHistory } from "react-router-dom";
import { FormProps } from "../headless/form/type";

import { EditProps } from "./type";

const Edit =
  <A, Id = number>(
    Form: (a: Omit<FormProps<A>, "formDef">) => JSX.Element,
    update: (data: Partial<A>, id: Id) => Promise<void>,
    redirectUrl: string
  ) =>
  ({
    id,
    data: dataIn,

    formOptions,
  }: EditProps<A, Id>) => {
    const history = useHistory();

    const handleSubmit = (data: Partial<Omit<A, "id">>) =>
      update(data as any, id).then((x) => {
        history.push(redirectUrl);
      });

    return (
      <Form
        valueDefault={dataIn}
        onSuccess={handleSubmit}
        options={formOptions}
      />
    );
  };

export default Edit;
