import React from "react";
import "./Badge.module.css";

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

const Button = (props: Props) => {
    return <span className={`badge badge--${props.color}`}>{props.label}</span>;
}

export default Button