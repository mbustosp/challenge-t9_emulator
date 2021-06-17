/**
 * Actions
 */
export const RESET_ACTION = "RESET";
export const UPDATE_TEXT_ACTION = "UPDATE_TEXT";
export const UPDATE_CHOSEN_WORD_ACTION = "UPDATE_CHOSEN_WORD";
export const UPDATE_SUGGESTED_WORDS_ACTION = "UPDATE_SUGGESTED_WORDS";
export const ROTATE_SUGGESTED_WORDS_ACTION = "ROTATE_SUGGESTED_WORDS";

/**
 * Action creators
 */
export const getResetAction = () => ({
  type: RESET_ACTION,
});
export const getUpdateTextAction = (text) => ({
  type: UPDATE_TEXT_ACTION,
  params: { text },
});
export const getUpdateChosenWordAction = (word, idx) => ({
  type: UPDATE_CHOSEN_WORD_ACTION,
  params: { word, idx },
});
export const getUpdateSuggestedWordsAction = (suggestedWords, idx) => ({
  type: UPDATE_SUGGESTED_WORDS_ACTION,
  params: { suggestedWords, idx },
});
export const getRotateSuggestedWordsAction = () => ({
  type: ROTATE_SUGGESTED_WORDS_ACTION,
});
