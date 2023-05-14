import Link from "./Link";

export default { title: "Components/Link", component: Link };

export const Default = {
  args: {
    href: "",
    children: "Learn more",
  },
  argTypes: {
    variant: {
      options: ["default", "button", "arrow"],
      control: { type: "select" },
    },
    target: {
      options: ["_self", "_blank", "_parent", "_top"],
      control: { type: "select" },
    },
  },
};
