const express = require("express");
const router = express.Router();

// @routes   GET api/auth
// @desp     get logged in user
// @access   private

router.get("/", (req, res) => {
  res.send("get an user");
});

// @routes   POST api/auth
// @desp     Auth user and get token
// @access   public

router.post("/", (req, res) => {
  res.send("post an user");
});
module.exports = router;
