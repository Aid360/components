import Alert from "./Alert";
import Button from "../button/Button";

export default { title: "Alert", component: Alert };

function DummyChildren() {
  return <Button color="accent-red">Launch</Button>;
}

export const Default = {
  args: {
    title: "Launch Rocket",
    description:
      "Are you sure you want to launch rocket N3294Z? It is currently set to travel to Mars.",
    children: <DummyChildren />,
  },
};
