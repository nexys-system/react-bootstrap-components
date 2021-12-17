import { DefinitionItem } from "@nexys/core-list/dist/types";
import * as T from "../detail/type";

import { FormDef, FormProps } from "../form/type";
import { ViewField } from "../view/type";

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

export interface CrudOptions {
  showEditToggle: boolean;
  detailColWidth: number;
  editTitle?: string;
}

export type DetailGenericType<A, Id> = (
  Form: (a: FormProps<A>) => JSX.Element,
  viewFields: ViewField<A>[],
  { update, detail, deleteById, getOptions }: T.CrudRequestDetail<A, Id>,
  redirectUrl: string,
  showToggle: boolean,
  detailColWidth: number,
  extras?: ExtraUnit<A>[],
  editTitle?: string
) => (p: Omit<T.DetailLayoutProps<Id>, "Detail">) => JSX.Element;

// this is the unit input for the crud simple
export type CrudSimpleDef<A> = FormDef<A> &
  Pick<DefinitionItem<A>, "render" | "filter" | "sort">;
