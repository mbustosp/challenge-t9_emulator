import getUpdatedWords from "./getUpdatedWords";
import getWord from "./getWord";

describe("getUpdatedWords", () => {
  it("replaces with digits the chose property of those words who had changed", () => {
    const oldCollection = [getWord("2234", 0, "appl")];
    const newWords = ["22345"];
    const updatedCollection = getUpdatedWords(oldCollection, newWords);
    expect(updatedCollection[0]).toStrictEqual(getWord("22345", 0, "22345"));
  });

  it("does nothing with the unaltered words", () => {
    const oldCollection = [
      getWord("2234", 0, "appl"),
      getWord("565", 1, "bea"),
    ];
    const newWords = ["2234", "5656"];
    const updatedCollection = getUpdatedWords(oldCollection, newWords);
    expect(updatedCollection[0]).toStrictEqual(getWord("2234", 0, "appl"));
  });

  it("keeps chosen value for a word after a space", () => {
    const oldCollection = [getWord("1", 0, "?")];
    const newWords = ["1", "0"];
    const updatedCollection = getUpdatedWords(oldCollection, newWords);
    expect(updatedCollection[0]).toStrictEqual(getWord("1", 0, "?"));
  });

  it("keeps spaces as words", () => {
    const oldCollection = [getWord("1", 0, "?")];
    const newWords = ["1", "0"];
    const updatedCollection = getUpdatedWords(oldCollection, newWords);
    expect(updatedCollection).toStrictEqual([
      getWord("1", 0, "?"),
      getWord("0", 1, "0"),
    ]);
  });
});
