import React from "react";
import { useParams } from "react-router-dom";

import * as T from "../headless/detail/type";
import { getParamTyped } from "../headless/detail/utils";

import { LinkBack } from "../utils-ui";

const DetailLayout = <Id,>({
  backUrl,
  Detail,
  paramType = "number",
}: T.DetailLayoutProps<Id> & { paramType?: T.ParamType }) => {
  const { id } = useParams<{ id?: string }>();

  const nid = getParamTyped<Id>(paramType, id);

  return (
    <div>
      <Detail id={nid} />
      {/* <div className="row">
        <div className={"col-md-" + detailColWidth}>
          <h2>{title}</h2>

          <Detail id={nid} />
        </div>

        {extras &&
          extras.map((ExtraUnit, i) => (
            <div key={i} className={`col-md-${ExtraUnit.colSpan || 6}`}>
              <ExtraUnit.Component data={nid as any as A} />
            </div>
          ))}
      </div>*/}

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
