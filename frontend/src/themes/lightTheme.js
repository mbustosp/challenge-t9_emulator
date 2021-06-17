import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"],
  },
  palette: {
    primary: {
      main: "#545454",
    },
    secondary: {
      main: "#f9f5ed",
    },
  },
});
