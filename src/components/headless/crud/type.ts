export type Uuid = string;

export interface DetailCrudRequest<A, Id> {
  detail: (id: Id) => Promise<A>;
  update: (a: Partial<A>, id: Id) => Promise<void>;
  deleteById: (id: Id) => Promise<boolean>;
}

export type CrudInsert<A, Id> = (a: Omit<A, "id">) => Promise<{ id: Id }>;

export interface CrudRequest<A, Id> extends DetailCrudRequest<A, Id> {
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
