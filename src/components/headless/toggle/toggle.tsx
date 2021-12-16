import React from "react";
import { EditProps } from "../edit/type";
import { ToggleLayoutProps } from "./type";

export const ToggleHeadless =
  (ToggleLayout: (props: ToggleLayoutProps) => JSX.Element) =>
  <A, Id = number>(
    Edit: (a: EditProps<A, Id>) => JSX.Element,
    View: (a: { data: A }) => JSX.Element
  ) =>
  ({ id, data, formOptions }: EditProps<A, Id>) => {
    const [isEdit, setEdit] = React.useState<boolean>(false);

    return (
      <ToggleLayout isEdit={isEdit} setEdit={setEdit}>
        {isEdit ? (
          <Edit
            id={id}
            data={data}
            formOptions={formOptions}
            // todo? postUpdate returns the data, use it to then re inject to View via state
            postUpdate={() => setEdit(false)}
          />
        ) : (
          <View data={data} />
        )}
      </ToggleLayout>
    );
  };

export default ToggleHeadless;
