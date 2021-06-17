import { action } from "@storybook/addon-actions";
import Suggestions from "./index";
import specialChars from "../../../utils/specialChars";

const Template = (args) => <Suggestions {...args} />;

export const Default = Template.bind({});

export const WithOneSuggestion = () => (
  <Suggestions words={["test"]} onWordChoose={action("Chosen word")} />
);
WithOneSuggestion.storyName = "With one word";

export const WithManySuggestions = () => (
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
WithManySuggestions.storyName = "With many words";

export const WithEmptySpaceCharacters = () => (
  <Suggestions
    words={["💡", " ", specialChars.SPACE, "⚽"]}
    onWordChoose={action("Chosen word")}
  />
);
WithEmptySpaceCharacters.storyName = "With space characters";

export const Loading = () => (
  <Suggestions words={["test"]} onWordChoose={action("Chosen word")} loading />
);
Loading.storyName = "Loading suggestions";

export default {
  title: "Molecules/Suggestions",
  component: Suggestions,
};
