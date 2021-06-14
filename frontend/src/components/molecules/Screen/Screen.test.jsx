import { ThemeProvider } from "@material-ui/core/styles";
import { render, screen } from "@testing-library/react";
import { Typography } from "@material-ui/core";
import darkTheme from "../../../themes/darkTheme";
import Screen from "./index";

describe("Screen", () => {
  it("renders without crash", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen />
      </ThemeProvider>
    );
  });

  it("renders SuggestionComponent when provided", () => {
    const SuggestionComponent = <Typography>Suggestion Component</Typography>;
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen SuggestionsComponent={SuggestionComponent} />
      </ThemeProvider>
    );
    expect(screen.getByText("Suggestion Component")).toBeInTheDocument();
  });

  it("renders text", () => {
    const textToRender = "This is the text";
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen text={textToRender} />
      </ThemeProvider>
    );
    expect(screen.getByText(textToRender)).toBeTruthy();
  });
});
