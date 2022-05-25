const MoviesController = require("../../controllers/movies");

const route = async (req, res) => {
  const id = req.params.id;

  const deletedMovie = await MoviesController.deleteMovieById(id);

  return res.status(200).send({
    success: deletedMovie,
  });
};

module.exports = route;
