/* eslint-disable global-require */

/**
 * Constants
 */
const OLD_ENV = process.env;
const MOCKED_SUGGESTIONS = ["asd", "bca"];

describe("T9Api", () => {
  let originalFetch;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCKED_SUGGESTIONS),
      })
    );
  });

  afterAll(() => {
    process.env = OLD_ENV;
    global.fetch = originalFetch;
  });

  it("requires the user to provide the env variable", () => {
    process.env.REACT_APP_T9_API_URL = undefined;
    expect(() => {
      // eslint-disable-next-line global-require,no-unused-expressions
      require("./T9Api").default;
    }).toThrow(Error);
  });

  it("fetches from the proper url", () => {
    const fakeAPIURL = "https://my-super-api/";
    process.env.REACT_APP_T9_API_URL = fakeAPIURL;
    const fetchSuggestions = require("./T9Api").default;
    const digitParams = "123";
    fetchSuggestions(digitParams);
    expect(global.fetch).toHaveBeenCalledWith(
      `${fakeAPIURL}?input=${digitParams}`
    );
  });

  it("returns a json parsed response", () => {
    const fakeAPIURL = "https://my-super-api/";
    process.env.REACT_APP_T9_API_URL = fakeAPIURL;
    const fetchSuggestions = require("./T9Api").default;
    const digitParams = "123";
    return fetchSuggestions(digitParams).then((resp) => {
      expect(resp).toBe(MOCKED_SUGGESTIONS);
    });
  });
});
