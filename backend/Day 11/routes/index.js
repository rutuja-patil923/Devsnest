var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middleware/registerChecks");
var register = require("../controllers/register");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/**
 * @requires { email, firstName, lastName, password, confirmPassword } - req.body
 * @description
 * Security, performance and edge cases
 * LEVEL-1
 * email validate - string
 * password validate - string
 * password == confirmPassword
 * LEVEL-2
 * JS/SQL -THA
 * LEVEL-3
 * check if email already exists
 * password hash
 * email lowercase
 * save
 */
router.post("/register", registerInitialCheck, register);

module.exports = router;
