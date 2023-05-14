import Notification from "./Notification";

export default { title: "Components/Notification", component: Notification };

export const Default = {
  args: {
    title: "Stars misaligned!",
    children: "The stars don’t seem all that happy, your luck may run out!",
  },
  argTypes: {
    variant: {
      options: ["error", "warning", "info"],
      control: { type: "select" },
    },
  },
};
