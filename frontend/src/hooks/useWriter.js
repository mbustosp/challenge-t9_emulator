import { useCallback, useState } from "react";
import keysMapping from "../components/molecules/Keyboard/keysMapping";
import specialChars from "../utils/specialChars";
import "../typedefs";

// TODO: Create Service layer for this request
const fetchSuggestions = (digits) =>
  new Promise((resolve) => resolve(digits.split("")));

/**
 * Writer hook. It manages word suggestions based on T9's word prediction
 * algorithm.
 * @param {boolean} isT9Enabled True if t9 suggestions are enabled, false otherwise
 * @returns [getSuggestions, isLoading]
 */
export default (isT9Enabled) => {
  const [isLoading, setLoading] = useState(false);
  const [suggestionsDictionary, setSuggestionsDictionary] = useState({
    0: [specialChars.SPACE, "0"], // Special space char will get rendered between text nodes
    1: keysMapping["1"].symbols.split(""),
  });

  /**
   * Adds the suggested words to the dictionary. Memoization of T9 suggestions
   * @param {string} digits String of digits which will act as the key to get the suggestions
   * @param {[string]} suggestions Collection of words that were given as suggestion for the given
   * string of digits
   */
  const addSuggestionsToDictionary = useCallback(
    (digits, suggestions) => {
      setSuggestionsDictionary({
        ...suggestionsDictionary,
        [digits]: suggestions,
      });
    },
    [suggestionsDictionary]
  );

  /**
   * Gets suggestion words for the given digits. It first checks whether there
   * is a cached value in the suggestions dictionary for them. If so, then it
   * return them, otherwise it will
   * - Fetch a request to the t9 service if T9 is enabled and store the result
   * in the dictionary.
   * - Returns the symbols associated to that digit if T9 is disabled
   * @param {string} digits string of digits
   * @param {function} onSuccess callback function that gets invoked with the
   * found word suggestions as parameters when suggestions are found
   * @param {function} onFailure callback function that gets invoked with the
   * corresponding error as parameters when suggestions request fails
   */
  const getSuggestions = useCallback(
    (digits, onSuccess, onFailure) => {
      if (suggestionsDictionary[digits]) {
        onSuccess(suggestionsDictionary[digits]);
      } else if (isT9Enabled) {
        setLoading(true);
        fetchSuggestions(digits)
          .then((suggestions) => {
            addSuggestionsToDictionary(digits, suggestions);
            onSuccess(suggestions);
          })
          .catch(onFailure)
          .finally(() => setLoading(false));
      } else {
        onSuccess([digits]);
      }
    },
    [addSuggestionsToDictionary, suggestionsDictionary, isT9Enabled]
  );

  return [getSuggestions, isLoading];
};
