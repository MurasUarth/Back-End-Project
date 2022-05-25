const Database = require("../utils/database");
const Model = require("../utils/model");

class MoviesModel extends Model {
  constructor() {
    super("movies");
  }

  async insertMovie(movie) {
    const db = Database.client.db("movie_rental");
    const moviesCollection = db.collection(this.collectionName);

    const result = await moviesCollection.insertOne(movie);

    console.log(result);
  }

  async deleteMovieById(id) {
    const db = Database.client.db("movie_rental");
    const moviesCollection = db.collection(this.collectionName);
    const toBeDeleted = await this.findById(id);

    const result = moviesCollection.deleteOne(toBeDeleted);

    console.log(result);
  }

  async listMovies(limit, skip, available, title) {
    const db = Database.client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const cursor = moviesCollection.find("").project({ title: 1 }).sort({ title: 1 });

    if (limit) {
      cursor.limit(limit);
    }

    if (skip) {
      cursor.skip(skip);
    }

    if (title) {
      cursor.includes(title);
    }

    if (available) {
    }

    const movies = await cursor.toArray();

    console.log(movies);
  }
}

module.exports = new MoviesModel();
