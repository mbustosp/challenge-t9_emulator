const keys = require("./t9Keys");

/**
 * Trie data structure designed for T9.
 * Implementation heavily referenced from http://mitchrobb.com/blog/Solving-T9-Autocomplete-with-a-Prefix-Tree/
 */
class Trie {
  constructor() {
    this.children = {};
    this.words = [];
  }

  /**
   * Inserts a word into the trie
   * @param {string} word string that will be stored
   * @param {number} useFrequency natural number indicating the frequency of this
   * word in the provided frequency dictionary
   */
  insert(word, useFrequency) {
    function traverseAddingNodes(initialNode) {
      let node = initialNode;
      const len = word.length;
      // Traverse through the tree's existing nodes as deep as possible.
      for (let i = 0; i < len; i += 1) {
        const thisLetter = word[i];
        const thisKey = keys[thisLetter];
        if (node.children.hasOwnProperty(thisKey)) {
          node = node.children[thisKey];
        } else {
          // Add new keys for those digit sequences that are not yet stored
          node.children[thisKey] = new Trie();
          node = node.children[thisKey];
        }
      }
      return node;
    }

    function insertWordIntoListByFrequency(list, wordToInsert, wordFrequency) {
      const parsedWord = [wordToInsert, wordFrequency]; // Store word in a tuple.
      const wordsLength = list.length;
      const isTheLargestOfTheList = list.length
        ? list[list.length - 1][1] > parsedWord[1]
        : true;

      if (isTheLargestOfTheList) {
        list.push(parsedWord);
      } else {
        // Find the proper position of the word in the list based on the frequency
        for (let i = 0; i < wordsLength; i += 1) {
          const comparedFrequency = list[i][1];
          const insertFrequency = parsedWord[1];
          if (insertFrequency > comparedFrequency) {
            list.splice(i, 0, parsedWord);
            return;
          }
        }
      }
    }

    // Traverse the tree to the node where the word should be inserted. If any
    // needed nodes do not exist along the way, they are created.
    const nodeToAddWord = traverseAddingNodes(this);

    // Insert the word into the wordlist of the node returned above. Use the
    // data provided (frequency of use in English text) to place the word in
    // the correct position, so that we can recommend more common words first.
    insertWordIntoListByFrequency(nodeToAddWord.words, word, useFrequency);
  }

  /**
   * Gets word suggestions for the given digits based on the T9's algorithm.
   * @param {string} digits t9's keyboard digits
   * @returns {string[]} word suggestions
   */
  getSuggestions(digits) {
    // Traverse the tree based on the key digits in keyString, to find the
    // node where relevant words are stored.
    let node = this;

    for (let i = 0; i < digits.length; i += 1) {
      const thisKey = digits[i];
      if (!node.children.hasOwnProperty(thisKey)) {
        break;
      }
      node = node.children[thisKey];
    }

    // Add all the words to the result.
    return node.words.map((wordTuple) => wordTuple[0]);
  }
}

module.exports = Trie;
