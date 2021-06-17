import {
  RESET_ACTION,
  ROTATE_SUGGESTED_WORDS_ACTION,
  UPDATE_CHOSEN_WORD_ACTION,
  UPDATE_SUGGESTED_WORDS_ACTION,
  UPDATE_TEXT_ACTION,
} from "./useWordsActions";
import getUpdatedWords from "../utils/getUpdatedWords";
import splitNonAlphabetDigitsFromWords from "../utils/splitNonAlphabetDigitsFromWords";
import replaceAt from "../utils/replaceAt";

export const initialState = {
  text: "",
  activeWord: {},
  words: [],
  suggestedWords: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case RESET_ACTION: {
      return initialState;
    }
    case UPDATE_TEXT_ACTION: {
      const { words } = state;
      const newText = action.params.text;
      const newWords = splitNonAlphabetDigitsFromWords(newText);
      const updatedText = newText;
      const updatedWords = getUpdatedWords(words, newWords);
      const updatedActiveWord = updatedWords[updatedWords.length - 1];

      return {
        ...state,
        text: updatedText,
        words: updatedWords,
        activeWord: updatedActiveWord,
      };
    }
    case UPDATE_CHOSEN_WORD_ACTION: {
      const { words } = state;
      if (action.params.idx < words.length && words.length) {
        const updatedWords = replaceAt(words, action.params.idx, {
          ...words[action.params.idx],
          chosen: action.params.word,
        });
        return {
          ...state,
          words: updatedWords,
          activeWord: updatedWords[updatedWords.length - 1],
        };
      }
      return state;
    }
    case UPDATE_SUGGESTED_WORDS_ACTION: {
      const { words } = state;
      if (words.length > action.params.idx) {
        return {
          ...state,
          suggestedWords: [...action.params.suggestedWords],
        };
      }
      return state;
    }
    case ROTATE_SUGGESTED_WORDS_ACTION: {
      const { suggestedWords, words, activeWord } = state;

      if (suggestedWords.length) {
        const rotatedSuggestions = [
          ...suggestedWords.slice(1, suggestedWords.length),
          suggestedWords[0],
        ];

        return {
          ...state,
          suggestedWords: rotatedSuggestions,
          words: replaceAt(words, activeWord.idx, {
            ...words[activeWord.idx],
            chosen: rotatedSuggestions[0],
          }),
          activeWord: {
            ...state.activeWord,
            chosen: rotatedSuggestions[0],
          },
        };
      }
      return state;
    }
    default:
      throw new Error();
  }
}
