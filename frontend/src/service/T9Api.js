const API_URL = process.env.REACT_APP_T9_API_URL;
if (!API_URL) {
  throw new Error(
    "Please, provide the application with an API URL value (hint: set REACT_APP_T9_API_URL in a .env file)"
  );
}

/**
 * Requests T9 predictive words using the given digits by fetching from the API
 * @param {string} digits String of digits that will be used to make the request
 * @returns {Promise<Response>}
 */
export const fetchSuggestions = (digits) =>
  fetch(`${API_URL}?input=${digits}`).then((resp) => resp.json());

export default fetchSuggestions;
