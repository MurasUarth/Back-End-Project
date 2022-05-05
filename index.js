const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const MoviesRouter = require("./services/movies");
const database = require("./utils/database");

server.use(bodyParser.json());

server.listen(3000, async () => {
  await database.run();
  console.log("We are live!");
});

server.use("/movies", MoviesRouter);
