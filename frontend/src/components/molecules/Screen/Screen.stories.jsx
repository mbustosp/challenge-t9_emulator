import { action } from "@storybook/addon-actions";
import Screen from "./index";
import Suggestions from "../Suggestions";

const Template = (props) => <Screen {...props} />;

export const Default = Template.bind({});

const SuggestionsComponent = (
  <Suggestions
    words={["one", "two", "three"]}
    onWordChoose={action("Chosen word")}
  />
);

export const WithText = () => (
  <Screen text="This is the content of the screen" />
);
export const WithSuggetionsComponent = () => (
  <Screen SuggestionsComponent={SuggestionsComponent} />
);
export const WithBoth = () => (
  <Screen
    text="This is the content of the screen"
    SuggestionsComponent={SuggestionsComponent}
  />
);

export default {
  title: "Molecules/Screen",
};
