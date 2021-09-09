import * as T from "../form/type";

export interface RowProps<A> {
  data: Partial<A>;
  structureUnit: T.StructureViewUnit<A>;
}

export interface ViewProps<A> {
  data: Partial<A>;
  structure: T.StructureViewUnit<A>[];
}
