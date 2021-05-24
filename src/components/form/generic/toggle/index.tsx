import React from "react";
import * as T from "../type";

import View from "../view";
import GenericForm from "../form";
import Icon from "../../../icon";
import { BtnBack, BtnEdit } from "../../../button/actions";

const Toggle = <A,>({ data, structure, onSubmit }: T.ToggleProps<A>) => {
  const [isEdit, setEdit] = React.useState(false);

  const handleSubmit = async (data: Partial<A>) =>
    onSubmit(data).then((x) => {
      setEdit(false);
    });

  if (isEdit) {
    return (
      <>
        <GenericForm<A>
          structure={structure}
          data={data}
          onSubmit={handleSubmit}
        />
        <BtnBack onClick={() => setEdit(false)} />
      </>
    );
  }

  return (
    <>
      <View data={data} structure={structure} />
      <BtnEdit onClick={() => setEdit(true)} />
    </>
  );
};

export default Toggle;
