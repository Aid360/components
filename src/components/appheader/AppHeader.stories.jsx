import AppHeader from "./AppHeader";

export default { title: "Components/App Header", component: AppHeader };

export const Default = {
  args: {},
  argTypes: {
    app: {
      options: ["risks", "safetyhub"],
      control: { type: "select" },
    },
  },
};
