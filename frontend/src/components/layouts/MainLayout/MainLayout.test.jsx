import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../../../themes/darkTheme";
import MainLayout from "./index";

describe("MainLayout", () => {
  it("renders without crash", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <MainLayout />
      </ThemeProvider>
    );
  });

  it("renders children", () => {
    const textToRender = "This text will be render in the layout";
    render(
      <ThemeProvider theme={darkTheme}>
        <MainLayout>{textToRender}</MainLayout>
      </ThemeProvider>
    );
    expect(screen.getByText(textToRender)).toBeTruthy();
  });
});
