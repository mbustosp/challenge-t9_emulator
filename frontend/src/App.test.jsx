import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });
  it("renders without crash", () => {
    render(<App />);
  });
});
