export enum FormType {
  Number,
  Text,
  Select,
  SelectObject,
  Switch,
}

export interface FormDef<A> {
  name: keyof A;
  label?: string;
  uiType: FormType;
  optional: boolean;
  options?: { id: number; name: string }[];
}
