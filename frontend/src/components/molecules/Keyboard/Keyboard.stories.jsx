import { action } from "@storybook/addon-actions";
import Keyboard from "./index";

export const Default = () => <Keyboard onKeyPress={action("Pressed key")} />;

export default {
  title: "Molecules/Keyboard",
};
