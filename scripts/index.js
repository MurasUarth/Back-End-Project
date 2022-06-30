const json = require("./Film.json");
const insert = require("../models/movies");

json.map((body) => {
  const { Title, Director } = body;
  insert.insertMovie({ title: Title, director: Director });
  console.log(Title, Director);
});
