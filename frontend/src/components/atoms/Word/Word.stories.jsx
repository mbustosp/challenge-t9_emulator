import Word from "./index";

const Template = (props) => <Word {...props} />;

export const Default = Template.bind({});
export const NotActive = () => <Word word="Plane" />;
export const Active = () => <Word word="Plane" active />;

export default {
  title: "Atoms/Word",
};
