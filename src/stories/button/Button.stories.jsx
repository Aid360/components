import Button from "./Button";

export default { title: "Button", component: Button };

export const Default = {
  args: {
    children: "Launch!",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};
