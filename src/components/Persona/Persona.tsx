import React from "react";
import "./Persona.module.scss";

interface Props {
  href: string;
  img: string;
  name: string;
}

export default function Persona(props: Props) {
  return (
    <a href={props.href} className="persona">
      <img src={props.img} alt="name" className="persona__img" />
      <span className="persona__name">{props.name}</span>
    </a>
  );
}
