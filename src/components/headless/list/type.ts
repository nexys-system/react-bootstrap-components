import { Types } from "@nexys/core-list";
export interface ListProps<A, Id> {
  getData: () => Promise<A[]>;
  addLink?: string;
  editLink?: (id: Id) => string;
  def: Types.Definition<A>;
  config?: Types.Config<A>;
}
