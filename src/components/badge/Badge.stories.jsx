import Badge from "./Badge";

export default { title: "Components/Badge", component: Badge };

export const Default = {
  args: {
    children: "Comming soon!",
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
