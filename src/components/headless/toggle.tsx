import React from "react";
import * as T from "./form/type";
import { ViewProps } from "./view/type";

const ToggleGeneric =
  <A,>(
    GenericForm: (props: T.FormProps<A>) => JSX.Element,
    View: (props: ViewProps<A>) => JSX.Element,
    BtnBack: (props: { onClick: () => void }) => JSX.Element,
    BtnEdit: (props: { onClick: () => void }) => JSX.Element
  ) =>
  ({ data, formDef, onSuccess }: T.ToggleProps<A>) => {
    const [isEdit, setEdit] = React.useState(false);

    const handleSubmit = async (data: Partial<A>) =>
      onSuccess(data as A).then((x) => {
        setEdit(false);
      });

    if (isEdit) {
      return (
        <>
          <GenericForm
            formDef={formDef}
            valueDefault={data}
            onSuccess={handleSubmit}
          />
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

export default ToggleGeneric;
