import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useColorScheme } from "use-color-scheme";
import darkTheme from "./themes/darkTheme";
import lightTheme from "./themes/lightTheme";

function App() {
  const { scheme } = useColorScheme();
  return (
    <ThemeProvider theme={scheme === "dark" ? darkTheme : lightTheme}>
      <Typography>Kiwi challenge</Typography>
    </ThemeProvider>
  );
}

export default App;
