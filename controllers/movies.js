const MoviesModel = require("../models/movies");

class MoviesController {
  async listMovies() {
    const result = await MoviesModel.listMovies();

    return result;
  }

  async insertMovie(movie) {
    const insertedMovie = await MoviesModel.insertMovie(movie);

    return insertedMovie;
  }
}

module.exports = new MoviesController();
