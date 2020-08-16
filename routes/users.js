const express = require("express");
const router = express.Router();

// @routes   POST
// @desp     register user
// @access   public

router.post("/", (req, res) => {
  res.send("register a user");
});
module.exports = router;
