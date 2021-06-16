import { render, screen } from "@testing-library/react";
import Word from "./index";

describe("Word", () => {
  it("renders without crash", () => {
    render(<Word word="apple" />);
  });

  it("renders the given word", () => {
    const word = "apple";
    render(<Word word={word} />);
    expect(screen.getByText(word)).toBeTruthy();
  });
});
