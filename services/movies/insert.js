const MoviesController = require("../../controllers/movies");

const route = async (req, res) => {
  const body = req.body;

  const insertedMovie = await MoviesController.insertMovie(body);

  return res.status(200).send({
    success: insertedMovie,
  });
};

module.exports = route;
