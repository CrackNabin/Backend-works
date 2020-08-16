const express = require("express");
const router = express.Router();

// @routes   Get api/contacts
// @desp     get all contacts
// @access   private

router.get("/", (_req, res) => {
  res.send("get a contact");
});

// @routes   Post api/contacts
// @desp     add a new contacts
// @access   private

router.post("/", (_req, res) => {
  res.send("Add new contact");
});

// @routes   Get api/contacts/:id
// @desp     get all contacts
// @access   public

router.put("/:id", (_req, res) => {
  res.send("Edit a contact");
});

// @routes   Delete api/contacts/:id
// @desp     get all contacts
// @access   public

router.delete("/:id", (_req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
