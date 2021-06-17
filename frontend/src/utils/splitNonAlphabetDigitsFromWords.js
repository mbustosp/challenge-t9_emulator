/**
 * Gets a collection of digits words from a string. The digits 0 and 1 are not
 * considered to be part of a longer word, so they work as dividers.
 * @param {string} newText String containing the digit based representation of words.
 * @returns {string[]} Collection of words split using the described criteria.
 */
export default (newText) =>
  newText.replace(/0/g, "x0x").replace(/1/g, "x1x").split("x").filter(Boolean);
