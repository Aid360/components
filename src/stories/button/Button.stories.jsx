import React from "react";
import Button from "./Button";

export default { title: "Button", component: Button };

export const Default = {
  args: {
    children: "Click me!",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};
