export interface InputProps<A> {
  onChange: (v: A | undefined) => void;
  value?: A;
  errors?: string[];
}

export interface SelectProps<A> extends InputProps<A> {
  options?: { id: number; name: string }[];
}