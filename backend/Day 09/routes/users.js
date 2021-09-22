var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/mango/:name", function (req, res, next) {
  // res.send('respond with a resource');
  console.log("hello");
  res.sendFile(path.join(__dirname, "../stylesheets/style.css"), "style.css");
});

module.exports = router;
