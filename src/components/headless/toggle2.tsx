import React from "react";
import { FormOptionsMap } from "./form/type";

export interface EditProps<A, Id = number> {
  id: Id;
  data: A;
  submitLabel?: string;
  formOptions?: FormOptionsMap<A>;
}

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
          <Edit id={id} data={data} formOptions={formOptions} />
        ) : (
          <View data={data} />
        )}
      </ToggleLayout>
    );
  };

export interface ToggleLayoutProps {
  isEdit: boolean;
  setEdit: (edit: boolean) => void;
  children: JSX.Element | JSX.Element[];
}

export default ToggleHeadless;
