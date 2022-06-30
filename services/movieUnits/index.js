const express = require("express");
const router = express.Router();
const patch = require("./patch");

router.patch("/movie_units/:id", patch);

module.exports = router;
