import Tooltip from "./Tooltip";
import Badge from "../badge/Badge";

export default { title: "Tooltip", component: Tooltip };

export const Default = {
  args: {
    children: <Badge color="accent-blue">No fuel!</Badge>,
    tooltip: "The rocket is running low on fuel.",
  },
  argTypes: {
    position: {
      options: ["top", "bottom", "block-end", "block-start"],
      control: { type: "select" },
    },
  },
};
