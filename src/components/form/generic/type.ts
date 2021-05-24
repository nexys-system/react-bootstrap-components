export type TypeUnit = "string" | "number" | "category";

export interface StructureUnit<A> {
  name: keyof A;
  label: string;
  type?: TypeUnit;
  options?: { id: number; name: string }[];
}

export interface FormProps<A> {
  data: Partial<A>;
  structure: StructureUnit<A>[];
  errors?: { [k in keyof A]?: string[] };
  onSubmit: (data: Partial<A>) => Promise<void>;
}

export type ToggleProps<A> = FormProps<A>;

//export interface Errors  <A>{ [l in keyof A]: string[] }
