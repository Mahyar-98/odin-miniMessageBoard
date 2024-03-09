const express = require("express");
const router = express.Router();

const title = "New Message";

router.get("/new", (req, res) => {
  res.render("new", { title });
});

module.exports = router;
