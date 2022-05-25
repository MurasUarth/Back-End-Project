const MoviesModel = require("../models/movies");

class MoviesController {
  async listMovies(limit, skip, available, title) {
    const result = await MoviesModel.listMovies(limit, skip, available, title);

    return result;
  }

  async deleteMovieById(id) {
    const result = await MoviesModel.deleteMovieById(id);

    return result;
  }

  async insertMovie(movie) {
    const insertedMovie = await MoviesModel.insertMovie(movie);

    return insertedMovie;
  }
}

module.exports = new MoviesController();
