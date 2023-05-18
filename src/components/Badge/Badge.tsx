import React from "react";
import "../../index.scss"

import "./Badge.module.scss";

interface Props {
  label: string;
  color:
    | "blue"
    | "red"
    | "green"
    | "yellow"
    | "orange"
    | "surface-0"
    | "surface-1"
    | "background";
}

const Badge = (props: Props) => {
  return <span className={`badge badge--${props.color}`}>{props.label}</span>;
};

export default Badge;
