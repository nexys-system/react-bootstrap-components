import React from "react";

import { Types } from "@nexys/core-list";

import Table from "../table";
import * as UtilsUI from "../utils-ui";

import ListLayout from "./layout";

const getDefWEdit = <A extends { id: number }>(
  def: Types.Definition<A>,
  editLink?: (id: number) => string
): Types.Definition<A> => {
  if (!editLink) {
    return def;
  }

  const defEdit: Types.DefinitionItem<A> = {
    name: "id",
    render: (x) => <UtilsUI.EditBtn link={editLink(x.id)} />,
  };

  return [...def, defEdit];
};

const List = <A extends { id: number }>({
  getData,
  def,
  addLink,
  editLink,
  config,
}: {
  getData: () => Promise<A[]>;
  addLink?: string;
  editLink?: (id: number) => string;
  def: Types.Definition<A>;
  config?: Types.Config<A>;
}) => (
  <ListLayout
    Table={({ data }) => (
      <Table data={data} def={getDefWEdit(def, editLink)} config={config} />
    )}
    addLink={addLink}
    getData={getData}
  />
);

export default List;
