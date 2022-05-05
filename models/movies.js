const Database = require("../utils/database");
const Model = require("../utils/model");

class MoviesModel extends Model {
  constructor() {
    super("movies");
  }

  static async listMovies() {
    const result = await Database.listMovies();

    return result;
  }

  static async insertMovie(movie) {
    const insertedMovie = await Database.insertMovie(movie);

    return insertedMovie;
  }
}

module.exports = new MoviesModel();
