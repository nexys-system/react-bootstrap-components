import React from "react";
import { useParams } from "react-router-dom";

import { LinkBack } from "../utils-ui";
import * as T from "./type";
import { getParamTyped } from "./utils";

const DetailLayout = <Id,>({
  title,
  backUrl,
  Detail,
  detailColWidth = 6,
  extras,
  paramType = "number",
}: T.DetailLayoutProps<Id> & { paramType?: T.ParamType }) => {
  const { id } = useParams<{ id?: string }>();

  const nid = getParamTyped<Id>(paramType, id);

  return (
    <div>
      <div className="row">
        <div className={"col-md-" + detailColWidth}>
          <h2>{title}</h2>

          <Detail id={nid} />
        </div>

        {extras &&
          extras.map((ExtraUnit, i) => (
            <div key={i} className="col-md-6">
              <ExtraUnit id={nid} />
            </div>
          ))}
      </div>

      {backUrl && (
        <div className="row">
          <div className="col-md-12">
            <LinkBack link={backUrl} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailLayout;
