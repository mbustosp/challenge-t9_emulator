const express = require("express");
const { getSuggestions } = require("../service/t9");

const router = express.Router();

/* GET */
router.get("/", (req, res) => {
  const digits = req.query.input;
  const suggestions = getSuggestions(digits);
  return res.send(suggestions);
});

module.exports = router;
