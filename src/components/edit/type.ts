import { FormOptionsMap } from "../headless/form/type";

export interface EditProps<A, Id = number> {
  id: Id;
  data: A;
  submitLabel?: string;
  formOptions?: FormOptionsMap<A>;
}
