import React from "react";

import "./SelectInput.module.scss";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  example?: string;
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}

export default function SelectInput(props: Props) {
  return (
    <div className="selectInput" id={props.id}>
      <label className="selectInput__label" htmlFor={`${props.id}__select`}>
        {props.label}
      </label>
      <p className="selectInput__placeholder">
        {props.placeholder}{" "}
        {props.example && (
          <>
            Example: <samp>{props.example}</samp>.
          </>
        )}
      </p>
      <select className="selectInput__input" id={`${props.id}__select`}>
        {props.options.map((option: Option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
