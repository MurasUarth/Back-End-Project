const express = require("express");
const router = express.Router();
const insert = require("./insert");

router.post("/movies", insert);