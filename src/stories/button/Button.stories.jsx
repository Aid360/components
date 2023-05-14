import Button from "./Button";

export default { title: "Button", component: Button };

export const Default = {
  args: {
    children: "Launch!",
  },
  argTypes: {
    color: {
      options: [
        "surface-0",
        "surface-1",
        "background",
        "accent-red",
        "accent-blue",
        "accent-green",
        "accent-yellow",
        "accent-orange",
      ],
      control: { type: "select" },
    },
  },
};
