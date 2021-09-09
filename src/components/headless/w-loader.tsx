import React from "react";

export const WLoader =
  (Loader: (props: any) => JSX.Element) =>
  <T,>({
    getData,
    Component,
  }: {
    getData: () => Promise<T>;
    Component: ({ data }: { data: T }) => JSX.Element;
  }) => {
    const [data, setData] = React.useState<undefined | T>(undefined);

    if (data !== undefined) {
      return <Component data={data} />;
    }

    getData().then(setData);

    return <Loader />;
  };

export default WLoader;
