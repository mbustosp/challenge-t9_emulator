const express = require("express");

const router = express.Router();

/* GET */
router.get("/", (req, res) => {
  res.send(["mock1", "mock2"]);
});

module.exports = router;
