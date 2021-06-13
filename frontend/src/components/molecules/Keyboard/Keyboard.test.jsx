import { ThemeProvider } from "@material-ui/core/styles";
import { fireEvent, render, screen } from "@testing-library/react";
import darkTheme from "../../../themes/darkTheme";
import Keyboard from "./index";
import keysMapping from "./keysMapping";

describe("Keyboard", () => {
  it("renders without crash", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Keyboard />
      </ThemeProvider>
    );
  });

  it("renders all mapped keys", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Keyboard />
      </ThemeProvider>
    );
    const checkThatItWasRendered = (key) =>
      expect(screen.getByText(key.value)).toBeTruthy();
    Object.values(keysMapping).forEach(checkThatItWasRendered);
  });

  it("calls onKeyPress callback function when a button is pressed", () => {
    const onKeyPress = jest.fn();
    render(
      <ThemeProvider theme={darkTheme}>
        <Keyboard onKeyPress={onKeyPress} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(keysMapping["0"].value));
    expect(onKeyPress).toHaveBeenCalledWith(keysMapping["0"]);
  });
});
