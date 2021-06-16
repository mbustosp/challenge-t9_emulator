import ScreenText from "./index";
import getWord from "../../../utils/getWord";

const Template = (props) => <ScreenText {...props} />;

const appleWord = getWord("345", 0, "Apple");
const bananaWord = getWord("543", 0, "Banana");
const melonWord = getWord("645", 0, "Melon");
const pineAppleWord = getWord("6745564", 0, "Pineapple");
const emptySpace = getWord("0", 0, " ");
const fruits = [appleWord, emptySpace, bananaWord, emptySpace, melonWord];

export const Default = Template.bind({});

export const WithText = () => <ScreenText words={fruits} />;

export const WithActiveWord = () => (
  <ScreenText words={fruits} activeWord={pineAppleWord} />
);

export default {
  title: "Molecules/ScreenText",
};
