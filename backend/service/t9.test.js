/* eslint-disable global-require */
describe("t9 service", () => {
  it("has getSuggestion method", () => {
    const t9 = require("./t9");
    expect(
      Object.prototype.hasOwnProperty.call(t9, "getSuggestions")
    ).toBeTruthy();
  });

  describe("getSuggestions", () => {
    it("returns hello when 4-3-5-5-6 is pressed", () => {
      const t9 = require("./t9");
      expect(t9.getSuggestions("43556")).toBeTruthy();
    });
  });
});
