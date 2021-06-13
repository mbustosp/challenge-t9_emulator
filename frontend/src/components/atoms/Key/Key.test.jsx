import { ThemeProvider } from "@material-ui/core/styles";
import { screen, render, fireEvent } from "@testing-library/react";
import Key from "./index";
import darkTheme from "../../../themes/darkTheme";

describe("Key", () => {
  it("renders without crash", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Key />
      </ThemeProvider>
    );
  });

  it("renders primary and secondary symbols", () => {
    const keyPrimarySymbol = 1;
    const keySecondarySymbols = ["😀", "🙏", "👀"];
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={darkTheme}>
        <Key
          onClick={onClick}
          primarySymbol={keyPrimarySymbol}
          secondarySymbols={keySecondarySymbols}
        />
      </ThemeProvider>
    );
    const foundKeyByNumber = screen.getByText(keyPrimarySymbol);
    const foundKeysBySymbols = keySecondarySymbols.map((keySymbol) =>
      screen.getByText(keySymbol)
    );
    expect(foundKeyByNumber).toBeTruthy();
    foundKeysBySymbols.forEach((foundKeyBySymbol) =>
      expect(foundKeyBySymbol).toBeTruthy()
    );
  });

  it("calls onClick callback function when component is clicked", () => {
    const keyPrimarySymbol = 1;
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={darkTheme}>
        <Key onClick={onClick} primarySymbol={keyPrimarySymbol} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(keyPrimarySymbol));
    expect(onClick).toHaveBeenCalled();
  });
});
