import AppHeader from "./AppHeader";

export default { title: "App Header", component: AppHeader };

export const Default = {
  args: {},
  argTypes: {
    app: {
      options: ["risks"],
      control: { type: "select" },
    },
  },
};
