const express = require("express");
const router = express.Router();
const insert = require("./insert");

router.post("/", insert);

module.exports = router;
