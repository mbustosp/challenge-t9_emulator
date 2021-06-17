import splitNonAlphabetDigitsFromWords from "./splitNonAlphabetDigitsFromWords";

describe("splitNonAlphabetDigitsFromWords", () => {
  it("splits words from 0", () => {
    const digits = "345603456";
    const wordsCollection = splitNonAlphabetDigitsFromWords(digits);
    expect(wordsCollection).toStrictEqual(["3456", "0", "3456"]);
  });

  it("splits words from 1", () => {
    const digits = "345613456";
    const wordsCollection = splitNonAlphabetDigitsFromWords(digits);
    expect(wordsCollection).toStrictEqual(["3456", "1", "3456"]);
  });

  it("keeps 0s and 1s away", () => {
    const digits = "10";
    const wordsCollection = splitNonAlphabetDigitsFromWords(digits);
    expect(wordsCollection).toStrictEqual(["1", "0"]);
  });
});
