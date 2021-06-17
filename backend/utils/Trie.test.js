const Trie = require("./Trie");
const t9Keys = require("./t9Keys");

describe("Trie", () => {
  it("does not crash", () => {
    const trie = new Trie();
    expect(trie).toBeTruthy();
  });

  describe("insert", () => {
    it("stores inserted words", () => {
      const trie = new Trie();
      trie.insert("a", 1);
      trie.insert("ab", 2);
      expect(trie.children[t9Keys.a].words).toContainEqual(["a", 1]);
      expect(trie.children[t9Keys.a].children[t9Keys.b].words).toContainEqual([
        "ab",
        2,
      ]);
    });

    it("stores words in the same array when they have the same digits sequence", () => {
      const trie = new Trie();
      trie.insert("a", 1);
      trie.insert("ab", 3);
      trie.insert("ac", 2);
      expect(trie.children[t9Keys.a].words).toContainEqual(["a", 1]);
      expect(trie.children[t9Keys.a].children[t9Keys.b].words).toContainEqual(
        ["ab", 3],
        ["ac", 2]
      );
    });
  });

  describe("getSuggestions", () => {
    it("gets an empty array when Trie is empty", () => {
      const trie = new Trie();
      expect(trie.getSuggestions("1")).toStrictEqual([]);
    });

    it("gets a suggestion words array with the most frequent word first", () => {
      const trie = new Trie();
      trie.insert("a", 1);
      trie.insert("ab", 3);
      trie.insert("aa", 1);
      trie.insert("ac", 2);

      expect(trie.getSuggestions("22")).toStrictEqual(["ab", "ac", "aa"]);
    });
  });
});
