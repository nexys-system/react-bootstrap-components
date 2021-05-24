export interface InputProps<A> {
  onChange: (v: A) => void;
  value?: A;
  errors?: string[];
}

export interface SelectProps<A> extends InputProps<A> {
  options?: { id: number; name: string }[];
}
