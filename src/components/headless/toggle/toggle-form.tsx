import React from "react";
import * as T from "../form/type";

import { ViewProps } from "../view/type";

const ToggleFormGeneric =
  <A,>(
    GenericForm: (formDef: any) => (props: T.FormProps<A>) => JSX.Element,
    formDef: T.FormDef<A>[],
    View: (props: ViewProps<A>) => JSX.Element,
    BtnBack: (props: { onClick: () => void }) => JSX.Element,
    BtnEdit: (props: { onClick: () => void }) => JSX.Element
  ) =>
  ({ data, onSuccess }: T.ToggleProps<A>) => {
    const [isEdit, setEdit] = React.useState(false);

    const handleSubmit = async (data: Partial<A>) =>
      onSuccess(data as A).then((x) => {
        setEdit(false);
      });

    const Form = GenericForm(formDef);

    if (isEdit) {
      return (
        <>
          <Form valueDefault={data} onSuccess={handleSubmit} />
          <BtnBack onClick={() => setEdit(false)} />
        </>
      );
    }

    return (
      <>
        <View data={data} structure={formDef} />
        <BtnEdit onClick={() => setEdit(true)} />
      </>
    );
  };

export default ToggleFormGeneric;
