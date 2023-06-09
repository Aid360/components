import React from "react";

import "./Link.module.scss";

interface Props {
  label: string;
  href: string;
  target?: "self" | "blank" | "parent" | "top";
  variant?: "default" | "arrow" | "button";
  color?:
    | "blue"
    | "red"
    | "green"
    | "yellow"
    | "orange"
    | "surface-0"
    | "surface-1"
    | "background";
}

export default function Link(props: Props) {
  return (
    <a
      className={`link link--${props.variant ? props.variant : "default"} link--color--${props.color}`}
      href={props.href}
      target={`_${props.target ? props.target : "self"}`}
    >
      <span className={"body"}>{props.label}</span>

      {props.variant === "arrow" && (
        <svg
          className={"arrow"}
          width="38"
          height="24"
          viewBox="0 0 38 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807611 25.9792 0.807611 25.3934 1.3934C24.8076 1.97919 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM2 13.5H36V10.5H2V13.5Z" />
        </svg>
      )}
    </a>
  );
}
