import * as T from "../form/type";

export interface RowProps<A> {
  data: Partial<A>;
  structureUnit: T.StructureViewUnit<A>;
}

export interface ViewProps<A> {
  data: Partial<A>;
  structure: T.StructureViewUnit<A>[];
}

export type ViewValue<A> = keyof A | ((d: A) => string | JSX.Element);

export type ViewField<A> = [string, ViewValue<A>];
