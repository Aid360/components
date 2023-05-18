import React from "react";

import "./TextInput.module.scss";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  example?: string;
}

export default function TextInput(props: Props) {
  return (
    <div className="textInput">
      <label className="textInput__label" htmlFor={props.id}>
        {props.label}
      </label>
      <p className="textInput__placeholder">
        {props.placeholder}{" "}
        {props.example && (
          <>
            Example: <samp>{props.example}</samp>.
          </>
        )}
      </p>
      <input className="textInput__input" id={props.id} type={"text"} />
    </div>
  );
}
