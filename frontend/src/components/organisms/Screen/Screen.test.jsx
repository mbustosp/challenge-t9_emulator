import { ThemeProvider } from "@material-ui/core/styles";
import { fireEvent, render, screen } from "@testing-library/react";
import darkTheme from "../../../themes/darkTheme";
import Screen from "./index";
import getWord from "../../../utils/getWord";

describe("Screen", () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  it("renders without crash", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen />
      </ThemeProvider>
    );
  });

  it("renders words", () => {
    const words = [getWord("4545", 0, "apple"), getWord("45455", 0, "applex")];
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen words={words} />
      </ThemeProvider>
    );
    words.forEach((word) => expect(screen.getByText(word.chosen)).toBeTruthy());
  });

  it("renders activeWord", () => {
    const words = [getWord("4545", 0, "apple"), getWord("45455", 0, "applex")];
    const activeWord = getWord("777", 3, "active");
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen words={words} activeWord={activeWord} />
      </ThemeProvider>
    );
    expect(screen.getByText(activeWord.chosen)).toBeTruthy();
  });

  it("renders suggestedWords", () => {
    const suggestedWords = ["apple", "applex"];
    const activeWord = getWord("777", 3, "active");
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen suggestedWords={suggestedWords} activeWord={activeWord} />
      </ThemeProvider>
    );
    suggestedWords.forEach((suggestedWord) =>
      expect(screen.getByText(suggestedWord)).toBeTruthy()
    );
  });

  it("renders loading message when loadingSuggestions is true", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen loadingSuggestions />
      </ThemeProvider>
    );
    expect(screen.getByText("Loading suggestions")).toBeTruthy();
  });

  it("calls onSuggestionPick when a suggestion word is clicked", () => {
    const onSuggestionPick = jest.fn();
    const suggestedWords = ["apple", "applex"];
    const activeWord = getWord("777", 3, "active");
    render(
      <ThemeProvider theme={darkTheme}>
        <Screen
          suggestedWords={suggestedWords}
          activeWord={activeWord}
          onSuggestionPick={onSuggestionPick}
        />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(suggestedWords[0]));
    expect(onSuggestionPick).toHaveBeenCalledWith(suggestedWords[0]);
  });
});
