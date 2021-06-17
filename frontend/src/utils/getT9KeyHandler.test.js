import getT9KeyHandler from "./getT9KeyHandler";
import keysMapping from "../components/molecules/Keyboard/keysMapping";

describe("getT9KeyHandler", () => {
  describe("The returned function", () => {
    it("does not call setText if the text is empty and DELETE key given", () => {
      const setText = jest.fn();
      const keyHandler = getT9KeyHandler("", setText, () => true);
      keyHandler(keysMapping.DELETE);
      expect(setText).not.toHaveBeenCalled();
    });

    it("calls setText argument with one character less from text if DELETE key is given and text is not empty", () => {
      const setText = jest.fn();
      const text = "abc";
      const keyHandler = getT9KeyHandler(text, setText, () => true);
      keyHandler(keysMapping.DELETE);
      expect(setText).toHaveBeenCalledWith(text.slice(0, -1));
    });

    it("calls rotateSuggestions if NEXT key is given", () => {
      const rotateSuggestions = jest.fn();
      const keyHandler = getT9KeyHandler("text", () => true, rotateSuggestions);
      keyHandler(keysMapping.NEXT);
      expect(rotateSuggestions).toHaveBeenCalled();
    });

    it("calls setText with text concatenated to the value of the key different from NEXT or DELETE is given", () => {
      const setText = jest.fn();
      const text = "text";
      const keyHandler = getT9KeyHandler(text, setText, () => true);
      keyHandler(keysMapping["3"]);
      expect(setText).toHaveBeenCalledWith(text + keysMapping["3"].value);
    });
  });
});
