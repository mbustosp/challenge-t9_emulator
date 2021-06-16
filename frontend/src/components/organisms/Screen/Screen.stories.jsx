import { action } from "@storybook/addon-actions";
import manyWords from "./randomWords.json";
import Screen from "./index";
import getWord from "../../../utils/getWord";

const appleWord = getWord("345", 0, "Apple");
const bananaWord = getWord("543", 0, "Banana");
const melonWord = getWord("645", 0, "Melon");
const emptySpace = getWord("0", 0, " ");
const fruits = [appleWord, emptySpace, bananaWord, emptySpace, melonWord];

const Template = (props) => <Screen {...props} />;
export const Default = Template.bind({});

export const WithText = () => (
  <Screen words={fruits} onSuggestionPick={action("Word picked")} />
);

export const WithALotOfText = () => (
  <Screen words={manyWords} onSuggestionPick={action("Word picked")} />
);

export const WithSuggestions = () => (
  <Screen
    words={fruits}
    onSuggestionPick={action("Word picked")}
    suggestedWords={["Plane", "Train", "Ship"]}
  />
);

export default {
  title: "Organisms/Screen",
};
