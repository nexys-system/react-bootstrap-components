import React from "react";
import { Route, Switch } from "react-router-dom";
import { Types } from "@nexys/core-list";

import { FormProps } from "../form/type";
import { ViewField } from "../view/type";
import { ListProps } from "../list/type";

import * as U from "./utils";
import * as T from "./type";

// same as above but the form needs to be given, `Form`
export const CrudGenericWForm =
  <A extends { id: Id }, Id>(
    ListGeneric: (a: ListProps<A, Id>) => JSX.Element,
    DetailGeneric: T.DetailGenericType<A, Id>,
    Form: (p: FormProps<A>) => JSX.Element
  ) =>
  (
    def: Types.Definition<A>,
    viewFields: ViewField<A>[],
    urlPrefix: string,
    crud: T.CrudRequest<A, Id>,
    extras?: T.ExtraUnit<A>[],
    options: Partial<T.CrudOptions> = {}
  ) => {
    const { showEditToggle = true, detailColWidth = 6, editTitle } = options;
    const addLink = urlPrefix + "/add";
    const editLink = (childId: Id | ":id") =>
      urlPrefix + "/" + childId + "/edit";
    const redirectUrl = urlPrefix;
    const backUrl = urlPrefix;

    const List = () => (
      <ListGeneric
        editLink={editLink}
        addLink={crud.insert && addLink} // only display (+) button if the crud insert is defined
        getData={crud.list}
        def={def}
      />
    );

    const PreDetail = DetailGeneric(
      Form,
      viewFields,
      { update: crud.update, deleteById: crud.deleteById, detail: crud.detail },
      redirectUrl,
      showEditToggle,
      detailColWidth,
      extras,
      editTitle
    );

    const Detail = () => <PreDetail backUrl={backUrl} />;

    return () => (
      <Switch>
        <Route
          exact
          path={addLink}
          component={U.AddComponent(Form, urlPrefix, crud.insert)}
        />
        <Route path={editLink(":id")} component={Detail} />
        <Route path={urlPrefix} component={List} />
      </Switch>
    );
  };

export default CrudGenericWForm;
