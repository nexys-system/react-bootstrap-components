import * as V from "@nexys/validation";

export interface InputProps<A> {
  onChange: (v: A | undefined) => void;
  value?: A;
  errors?: string[];
  disabled?: boolean;
  placeholder?: string;
}

export interface OptionSet<A> {
  id: A;
  name: string;
}

export interface WrapperProps {
  label?: string;
  info?: string;
  children: JSX.Element | JSX.Element[];
  errors?: string[];
}

/**
 * select props for dropdowns that return either a string or number (ie. enum)
 */
export type InputTypeString = "text" | "email" | "password";

/**
 * select props for dropdowns that return an option set
 */
export type InputType = InputTypeString | "number";

export interface SelectProps<A> extends InputProps<A> {
  options: OptionSet<A>[];
}

export interface SelectOptionSetProps<A> extends InputProps<OptionSet<A>> {
  options: OptionSet<A>[];
}

export enum FormType {
  Number,
  Text,
  Select,
  SelectObject,
  Switch,
}

export interface StructureViewUnit<A, Id = number> {
  name: keyof A;
  label?: string;
  options?: FormOptions<Id>;
  render?: (a: A) => string;
}

export type FormOptions<Id> = OptionSet<Id>[];

export type FormOptionsMap<A> = Map<keyof A, FormOptions<number | string>>;

export interface FormDef<A, Id = number> {
  name: keyof A;
  label?: string;
  uiType: FormType;
  optional: boolean;
  options?: FormOptions<Id>;
}

export interface StructureUnit<A> extends StructureViewUnit<A> {
  uiType?: FormType;
}

export interface FormProps<A> {
  onSuccess: (v: A) => Promise<void>;
  valueDefault?: Partial<A>;
  errors?: V.Type.ErrorOut | V.Type.Error;
  isLoading?: boolean;
  options?: FormOptionsMap<A>;
}

export type ToggleProps<A> = Omit<FormProps<A>, "valueDefault" | "formDef"> & {
  data: A;
};

export type InputUnitProps<Id> = {
  type: FormType;
  options?: OptionSet<number | string>[];
} & InputProps<Id>;

export interface FormContentProps<A> {
  disabled: boolean;
  data: A;
  onChange: (d: string, name: keyof A) => void;
  options?: FormOptionsMap<A>;
}

export interface FormUIProps<A> {
  data: Partial<A>;
  errors?: V.Type.ErrorOut | V.Type.Error;
  onChange: (name: string, value: any) => void;
  disabled: boolean;
}
