import { Types } from "@nexys/core-list";
export interface ListProps<A> {
  getData: () => Promise<A[]>;
  addLink?: string;
  editLink?: (id: number) => string;
  def: Types.Definition<A>;
  config?: Types.Config<A>;
}
