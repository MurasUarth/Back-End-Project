const MoviesModel = require("../models/movies");

class MoviesController {
  static async listMovies () {
    
    const result = await MoviesModel.listMovies();

    return result;
  }

  static async insertMovie (movie) {

    const insertedMovie = await MoviesModel.insertMovie(movie);

    return insertedMovie;
  }
}

module.exports = MoviesController;