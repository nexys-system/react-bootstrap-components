import { FormOptionsMap } from "../form/type";
import { ExtraUnit } from "../crud/type";

export type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ParamType = "number" | "string";

// note that the only that is mandatory is detail. View will be changed accordingly
export interface CrudRequestDetail<A, Id> {
  detail: (id: Id) => Promise<A>;
  update?: (data: Partial<A>, id: Id) => Promise<void>;
  deleteById?: (id: Id) => Promise<boolean>;
  getOptions?: () => Promise<FormOptionsMap<A>>;
}

export interface DetailLayoutProps<Id> {
  title: string;
  backUrl?: string;
  Detail: ({ id }: { id: Id }) => JSX.Element;
  detailColWidth?: ColWidth;
  extras?: ExtraUnit<Id>[];
}
