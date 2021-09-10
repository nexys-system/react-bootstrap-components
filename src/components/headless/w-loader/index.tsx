import React from "react";
import { isNullType } from "./utils";

/**
 *
 * @param Loader
 * @param nullPlaceholder  this is to avoid the following scenario: promise returns an actuall `null` and hence component is stuck in infinite loop. Hence the dev can pick any value. We recommend "null". In some scenarios it might be beneficial to pick `undefined` or `null`
 * @returns
 */
export const WLoader =
  <NullType extends string>(
    Loader: (props: any) => JSX.Element,
    nullPlaceholder: NullType
  ) =>
  <T,>({
    getData,
    Component,
  }: {
    getData: () => Promise<T>;
    Component: ({ data }: { data: T }) => JSX.Element;
  }) => {
    const [data, setData] = React.useState<T | NullType>();

    if (isNullType<T, NullType>(data, nullPlaceholder)) {
      return <Component data={data} />;
    }

    getData().then(setData);

    return <Loader />;
  };

export default WLoader;
