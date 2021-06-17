/**
 * Gets an updated collection of the given words using the digit based newWords
 * collection. If the word size has not changed, it leaves it as it is, otherwise
 * replaces the word's suggestion with the digit version of it
 * @param {Array.<{word: String}>} words Collection of words that will be updated
 * @param {Array.<string>} newWords Collection of new words in digit format.
 * @returns {Array.<{word: String, idx: number, chosen?: String}>}
 */
export default (words, newWords) =>
  newWords.map((newWordDigits, idx) => {
    const oldWord = idx < words.length ? words[idx] : undefined;
    if (oldWord) {
      if (oldWord.word !== newWordDigits) {
        return { idx, word: newWordDigits, chosen: newWordDigits };
      }
      return oldWord;
    }
    return { idx, word: newWordDigits, chosen: newWordDigits };
  });
