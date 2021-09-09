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

export type TypeUnit = "string" | "number" | "category";

export interface StructureViewUnit<A> {
  name: keyof A;
  label: string;
  options?: { id: number; name: string }[];
  render?: (a: A) => string;
}

export interface StructureUnit<A> extends StructureViewUnit<A> {
  type?: TypeUnit;
}

export interface FormProps<A> {
  data: Partial<A>;
  structure: StructureUnit<A>[];
  errors?: { [k in keyof A]?: string[] };
  onSubmit: (data: Partial<A>) => Promise<void>;
}

export type ToggleProps<A> = FormProps<A>;
