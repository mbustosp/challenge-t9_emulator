import { Box, Typography } from "@material-ui/core";
import MainLayout from "./index";

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

export default {
  title: "Layouts/MainLayout",
  component: MainLayout,
};
