import { useEffect, useReducer } from "react";
import { initialState, reducer } from "./useWordsReducer";
import {
  getResetAction,
  getRotateSuggestedWordsAction,
  getUpdateChosenWordAction,
  getUpdateSuggestedWordsAction,
  getUpdateTextAction,
} from "./useWordsActions";

/**
 * Word hook. It takes care of handling the state of the text that the user has
 * entered and provides some aggregated data:
 * - Which word is active,
 * - What words the text has,
 * - What are the T9 word suggestions for the active word,
 * Also, it returns functions to change the text, rotate the suggestions word collection,
 * and replace a word for one of its suggestions.
 * @param {function} getSuggestions Function that will provide the suggestions for the active word
 * @returns {{
    text,
    activeWord,
    words,
    suggestedWords,
    setSuggestionForWord,
    setText,
    rotateSuggestion}}
 */
export default (getSuggestions) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { text, activeWord, words, suggestedWords } = state;

  /**
   * Updates the text held in the state. If the text is empty, it will
   * reset all the state values
   * @param {string} newText Text that will replace the one in the state.
   */
  const setText = (newText) => {
    if (newText !== "") {
      dispatch(getUpdateTextAction(newText));
    } else {
      dispatch(getResetAction());
    }
  };

  /**
   * Stores the user chosen word suggestion for the 'wordNumber' word.
   * @param {string} chosenWord Chosen word suggestion
   * @param {number} wordNumber The number of the word that will have the chosen suggestion.
   */
  const setSuggestionForWord = (chosenWord, wordNumber) => {
    dispatch(getUpdateChosenWordAction(chosenWord, wordNumber));
  };

  /**
   * Rotates the word suggestion collection by placing the first item at the
   * last position and moving the rest to the left.
   */
  const rotateSuggestion = () => {
    dispatch(getRotateSuggestedWordsAction());
  };

  // Request for word suggestions when the active word changes
  useEffect(() => {
    if (activeWord.word) {
      getSuggestions(
        activeWord.word,
        (suggestions) => {
          dispatch(getUpdateSuggestedWordsAction(suggestions, activeWord.idx));
          if (suggestions.length) {
            dispatch(getUpdateChosenWordAction(suggestions[0], activeWord.idx));
          } else {
            dispatch(
              getUpdateChosenWordAction(activeWord.word, activeWord.idx)
            );
          }
        },
        () => dispatch(getUpdateSuggestedWordsAction([], activeWord.idx))
      );
    }
  }, [activeWord.word, activeWord.idx, getSuggestions]);

  return [
    text,
    activeWord,
    words,
    suggestedWords,
    setSuggestionForWord,
    setText,
    rotateSuggestion,
  ];
};
