// move to headless
import { FormOptionsMap } from "../form/type";

export interface EditProps<A, Id = number> {
  id: Id;
  data: A;
  submitLabel?: string;
  formOptions?: FormOptionsMap<A>;
}
