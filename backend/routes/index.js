var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(["mock1", "mock2"]);
});

module.exports = router;
