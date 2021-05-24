import React from "react";

const Nav = ({
  navs,
  option = 0,
}: {
  navs: { name: string; Component: JSX.Element }[];
  option?: number;
}) => {
  const [selected, setSelected] = React.useState<number>(option);

  const navSelected = navs[selected];

  if (!navSelected) {
    throw Error("selected item does not exist");
  }

  return (
    <>
      <ul className="nav nav-tabs">
        {navs.map((nav, i) => (
          <li key={i} className="nav-item">
            {/* here use buttons instead of <a>, but display is a bit weird*/}
            <button
              onClick={() => setSelected(i)}
              className={`btn btn-outline nav-link ${
                i === selected ? "btn-outline-primary" : ""
              }`}
            >
              {nav.name}
            </button>
          </li>
        ))}
      </ul>
      {navSelected.Component}
    </>
  );
};

export default Nav;
