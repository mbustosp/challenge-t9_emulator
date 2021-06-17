import keysMapping from "../components/molecules/Keyboard/keysMapping";

export default (text, setText, rotateSuggestions) =>
  /**
   * Pressed key handler.
   * @param {T9Key} pressedKey Information of the pressed key
   */
  (pressedKey) => {
    if (keysMapping.DELETE.value === pressedKey.value) {
      if (text.length) setText(text.substring(0, text.length - 1));
    } else if (keysMapping.NEXT.value === pressedKey.value) {
      rotateSuggestions();
    } else {
      setText(text + pressedKey.value);
    }
  };
