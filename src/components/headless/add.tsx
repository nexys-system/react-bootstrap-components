import React from "react";

import { useHistory } from "react-router-dom";
import { FormProps } from "./form/type";

const Add =
  <A, Id = number>(
    insert: (data: Omit<A, "id">) => Promise<{ id: Id }>,
    Form: (props: Omit<FormProps<A>, "formDef">) => JSX.Element,
    redirectUrl: string
  ) =>
  ({ data = {} }: { data?: Partial<A> }) => {
    const history = useHistory();

    const handleSubmit = (data: Partial<Omit<A, "id">>) =>
      insert(data as any).then((_x) => {
        history.push(redirectUrl);
      });

    return <Form valueDefault={data} onSuccess={handleSubmit} />;
  };

export default Add;
