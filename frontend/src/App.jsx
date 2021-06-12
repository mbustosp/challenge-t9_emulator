import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import darkTheme from "./themes/darkTheme";

const defaultTheme = darkTheme;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography>Kiwi challenge</Typography>
    </ThemeProvider>
  );
}

export default App;
