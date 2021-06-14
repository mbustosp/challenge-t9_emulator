import { action } from "@storybook/addon-actions";
import Suggestions from "./index";

const Template = (args) => <Suggestions {...args} />;

export const Default = Template.bind({});

export const WithOneSuggestion = () => (
  <Suggestions words={["test"]} onWordChoose={action("Chosen word")} />
);
WithOneSuggestion.storyName = "With one word";

export const WithManySuggestion = () => (
  <Suggestions
    words={[
      "this",
      "is",
      "another",
      "story",
      "for",
      "the",
      "suggestions",
      "component",
    ]}
    onWordChoose={action("Chosen word")}
  />
);
WithManySuggestion.storyName = "With many words";

export const Loading = () => (
  <Suggestions words={["test"]} onWordChoose={action("Chosen word")} loading />
);
Loading.storyName = "Loading suggestions";

export default {
  title: "Molecules/Suggestions",
  component: Suggestions,
};
