const express = require("express");
const bodyParser = require("body-parser");
const MoviesRouter = require("./services/movies/index");

server.use(bodyParser.json());

server.listen(3000, () => {
  console.log("We are live!");
});

server.use("/movies", MoviesRouter);