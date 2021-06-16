import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../../../themes/darkTheme";
import ScreenText from "./index";
import getWord from "../../../utils/getWord";

describe("ScreenText", () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  it("renders without crash", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ScreenText />
      </ThemeProvider>
    );
  });

  it("renders all words", () => {
    const words = [getWord("4545", 0, "apple"), getWord("45455", 0, "applex")];
    render(
      <ThemeProvider theme={darkTheme}>
        <ScreenText words={words} />
      </ThemeProvider>
    );
    words.forEach((word) => expect(screen.getByText(word.chosen)).toBeTruthy());
  });

  it("renders active word", () => {
    const words = [getWord("4545", 0, "apple"), getWord("45455", 0, "applex")];
    const activeWord = getWord("777", 3, "active");
    render(
      <ThemeProvider theme={darkTheme}>
        <ScreenText words={words} activeWord={activeWord} />
      </ThemeProvider>
    );
    expect(screen.getByText(activeWord.chosen)).toBeTruthy();
  });

  it("renders last word as active if active word is not present", () => {
    const words = [getWord("4545", 0, "apple"), getWord("45455", 1, "applex")];
    render(
      <ThemeProvider theme={darkTheme}>
        <ScreenText words={words} />
      </ThemeProvider>
    );
    expect(screen.getByText(words[words.length - 1].chosen)).toBeTruthy();
  });
});
