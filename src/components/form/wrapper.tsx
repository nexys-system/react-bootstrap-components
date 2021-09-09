import React from "react";
import { WrapperProps } from "../headless/form/type";

export const Wrapper = ({ label, info, children, errors }: WrapperProps) => (
  <div className="form-group">
    <label>{label}</label>
    {children}
    <small
      //id="emailHelp"
      className="form-text text-muted"
    >
      {info}
    </small>
    {errors && (
      <div className="invalid-feedback">
        <ul className="list list-unstyled">
          {errors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export const Wrapper2 = ({
  label,
  children,
}: {
  label?: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <div className="col-auto">
    {label && <label className="mr-sm-2">{label}</label>}
    {children}
  </div>
);

export default Wrapper;
