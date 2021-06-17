const request = require("supertest");
const app = require("../app");

describe("GET endpoints", () => {
  describe("/", () => {
    it("should retrieve the T9 prediction words", async () => {
      const res = await request(app).get("/").query({ input: "56" });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toStrictEqual(["mock1", "mock2"]);
    });
  });
});
