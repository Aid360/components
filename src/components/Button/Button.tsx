import React from "react";
import "./Button.module.css";

interface ButtonProps {
  label: string;
  color: [
    "blue",
    "red",
    "green",
    "yellow",
    "orange",
    "surface-0",
    "surface-1",
    "background"
  ];
}

const Button = (props: ButtonProps) => {
  return (
    <button className={["button", `button--${props.color}`].join(" ")}>
      {props.label}
    </button>
  );
};

export default Button;
