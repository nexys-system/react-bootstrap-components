import React from "react";
import { Link } from "react-router-dom";
import * as T from "./type";

const Btn = ({
  children,
  link,
  onClick,
}: {
  children: JSX.Element;
} & T.BtnCoreProps) => {
  const className = "btn btn-secondary btn-sm";

  if (link) {
    return (
      <Link to={link} type="button" className={className}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} type="button" className={className}>
        {children}
      </button>
    );
  }

  throw Error("btn action: either onclick or link must be given");
};

export default Btn;
