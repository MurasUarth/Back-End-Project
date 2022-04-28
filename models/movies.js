const Database = require("../utils/database");

class MoviesModel {

  static async listMovies () {
    
    const result = Database.listMovies();

    return result;
  }

  static async insertMovie (movie) {
    
    const insertedMovie = await Database.insertMovie(movie)

    return insertedMovie;
  }
}