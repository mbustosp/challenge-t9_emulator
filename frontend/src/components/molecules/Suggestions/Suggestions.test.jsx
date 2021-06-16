import { ThemeProvider } from "@material-ui/core/styles";
import { fireEvent, render, screen } from "@testing-library/react";
import darkTheme from "../../../themes/darkTheme";
import Suggestions from "./index";
import specialChars from "../../../utils/specialChars";

describe("Suggestions", () => {
  it("renders without crash", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Suggestions />
      </ThemeProvider>
    );
  });

  it("renders loading message when loading flag is provided", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Suggestions loading />
      </ThemeProvider>
    );
    expect(screen.getByText("Loading suggestions")).toBeTruthy();
  });

  it("renders word suggestions", () => {
    const wordSuggestions = ["Suggestion 1", "Suggestion 2"];
    render(
      <ThemeProvider theme={darkTheme}>
        <Suggestions words={wordSuggestions} />
      </ThemeProvider>
    );
    const checkThatItWasRendered = (word) =>
      expect(screen.getByText(word)).toBeTruthy();
    wordSuggestions.forEach(checkThatItWasRendered);
  });

  it("renders spaces characters as SPACE text", async () => {
    const wordSuggestions = [specialChars.SPACE, " "];
    render(
      <ThemeProvider theme={darkTheme}>
        <Suggestions words={wordSuggestions} />
      </ThemeProvider>
    );
    const matchings = await screen.findAllByText("SPACE");
    expect(matchings).toHaveLength(2);
  });

  it("calls onWordChoose callback function with the word of the clicked chip", () => {
    const onWordChoose = jest.fn();
    const wordSuggestions = ["Suggestion 1", "Suggestion 2"];
    render(
      <ThemeProvider theme={darkTheme}>
        <Suggestions words={wordSuggestions} onWordChoose={onWordChoose} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(wordSuggestions[0]));
    expect(onWordChoose).toHaveBeenCalledWith(wordSuggestions[0]);
  });
});
