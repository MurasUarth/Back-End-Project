const MoviesModel = require("../models/movies");

class MoviesController {
  static async listMovies () {
    
    const result = MoviesModel.listMovies();

    return result;
  }

  static async insertMovie (movie) {

    const insertedMovie = MoviesModel.insertMovie(movie);

    return insertedMovie;
  }
}

module.exports = MoviesController;