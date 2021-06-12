import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../src/themes/darkTheme";
import lightTheme from "../src/themes/lightTheme";
import { useColorScheme } from "use-color-scheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const { scheme } = useColorScheme();
    return (
      <ThemeProvider theme={scheme === "dark" ? darkTheme : lightTheme}>
        <Story />
      </ThemeProvider>
    );
  },
];
