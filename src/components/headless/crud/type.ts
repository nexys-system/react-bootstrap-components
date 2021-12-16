import * as T from "../detail/type";

export type Uuid = string;

export type CrudInsert<A, Id> = (a: Omit<A, "id">) => Promise<{ id: Id }>;

export interface CrudRequest<A, Id> extends T.CrudRequestDetail<A, Id> {
  list: () => Promise<A[]>;
  insert?: CrudInsert<A, Id>;
}

export interface ExtraUnit<A> {
  Component: ({ data }: { data: A }) => JSX.Element;
  paper?: boolean;
  tab?: string;
  title?: string;
  colSpan?: number;
}
