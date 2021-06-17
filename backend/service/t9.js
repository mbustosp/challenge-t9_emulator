// Words are sorted by frequency. More info: https://github.com/first20hours/google-10000-english
const { words } = require("../assets/englishDictionary10K.json");
const Trie = require("../utils/Trie");

const suggestionsTrie = new Trie();

// Load dictionary into the Trie
words.forEach((word, idx) => {
  suggestionsTrie.insert(word, idx);
});

// Exhibit the getSuggestions method
const getSuggestions = (digits) =>
  suggestionsTrie.getSuggestions(digits).reverse();

module.exports = { getSuggestions };
