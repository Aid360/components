import React from "react";
import "./Alert.module.css";

import Button from "../Button/Button";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Alert = (props: Props) => {
  return (
    <div className="alert">
      <h2 className="alert__title">{props.title}</h2>
      <p className="alert__description">{props.description}</p>
      <span className="alert__actions">
        <Button label="Cancel" color="surface-0" />
        {props.children}
      </span>
    </div>
  );
};

export default Alert;
