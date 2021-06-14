import { Box, Typography } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import MainLayout from "./index";
import Screen from "../../molecules/Screen";
import Keyboard from "../../molecules/Keyboard";
import Suggestions from "../../molecules/Suggestions";

const SuggestionsComponent = (
  <Suggestions
    words={["one", "two", "three"]}
    onWordChoose={action("Chosen word")}
  />
);

const Template = (args) => (
  <MainLayout {...args}>
    <Box
      width="100vh"
      height="100vh"
      bgcolor="primary.main"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>This is content inside the layout</Typography>
    </Box>
  </MainLayout>
);

export const Default = Template.bind({});

export const WithKeyboardAndScreen = () => (
  <MainLayout>
    <Box width="100%" height="100%" overflow="auto">
      <Screen
        text="This is a T9 emulator"
        SuggestionsComponent={SuggestionsComponent}
      />
    </Box>

    <Box pt={2} pb={1} px={1} justify="center">
      <Keyboard />
    </Box>
  </MainLayout>
);

export default {
  title: "Layouts/MainLayout",
  component: MainLayout,
};
