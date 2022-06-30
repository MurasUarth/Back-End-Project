const MovieUnitsController = require("../../controllers/movie_units");

const route = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const updatedMovie = MovieUnitsController.patch(body, id);

  return res.status(200).send({ success: true });
};
