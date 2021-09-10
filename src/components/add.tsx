import React from "react";
import { useHistory } from "react-router-dom";
import { FormProps } from "./headless/form/type";

const submitLabelDefault = "Add";

const Add =
  <A, Id = number>(
    insert: (data: Omit<A, "id">) => Promise<{ id: Id }>,
    Form: (props: Omit<FormProps<A>, "formDef">) => JSX.Element,
    redirectUrl: string
  ) =>
  ({
    data: dataIn = {},
    submitLabel = submitLabelDefault,
  }: {
    data?: Partial<A>;
    submitLabel?: string;
  }) => {
    const history = useHistory();

    const handleSubmit = (data: Partial<Omit<A, "id">>) =>
      insert(data as any).then((_x) => {
        history.push(redirectUrl);
      });

    return <Form valueDefault={dataIn} onSuccess={handleSubmit} />;
  };

export default Add;
