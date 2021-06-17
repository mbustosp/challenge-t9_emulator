import Key from "./index";

const Template = (args) => <Key {...args} />;

export const Empty = Template.bind({});

export const PrimarySymbol = () => <Key primarySymbol={1} />;
PrimarySymbol.storyName = "with primary symbol";

export const SecondarySymbols = () => (
  <Key secondarySymbols={["a", "b", "c"]} />
);
SecondarySymbols.storyName = "with secondary symbols";

export const WithBoth = () => (
  <Key primarySymbol={1} secondarySymbols={["a", "b", "c"]} />
);
WithBoth.storyName = "with both";

export default {
  title: "Atoms/Key",
  component: Key,
};
