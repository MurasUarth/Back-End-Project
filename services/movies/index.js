const express = require("express");
const router = express.Router();
const insert = require("./insert");
const deleteMovie = require("./delete");
const listMovies = require("./list");

router.get("/", listMovies);
router.post("/", insert);
router.delete("/:id", deleteMovie);

module.exports = router;
