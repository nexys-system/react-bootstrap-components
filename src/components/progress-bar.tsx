import React from "react";
import { ColorContext } from "./type";

export default ({
  value,
  colorContext,
  striped = false,
  animated = false,
}: {
  value: number;
  colorContext?: ColorContext;
  striped?: boolean;
  animated?: boolean;
}) => (
  <div className={`progress`}>
    <div
      className={`progress-bar ${striped ? "progress-bar-striped" : ""} ${
        animated ? "progress-bar-animated" : ""
      } ${colorContext ? "bg-" + colorContext : ""}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: value + "%" }}
    />
  </div>
);
