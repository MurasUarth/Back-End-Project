const MoviesController = require("../../controllers/movies");

const route = async (req, res) => {
  const { limit, skip, available, title } = req.query;
  const movies = await MoviesController.listMovies(limit, skip, available, title);
  console.log(req.query);

  return res.status(200).send({
    movies: movies,
  });
};

module.exports = route;
