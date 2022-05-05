const { MongoClient, ObjectId } = require("mongodb");

class Database {
  constructor() {
    this.url = "mongodb://localhost:27017";
    this.client = new MongoClient(this.url);
  }

  async run(limit, skip) {
    await client.connect();

    const db = client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const cursor = moviesCollection.find("").project({ title: 1 }).sort({ title: 1 });

    if (limit) {
      cursor.limit(limit);
    }

    if (skip) {
      cursor.skip(skip);
    }

    const movies = await cursor.toArray();

    console.log(movies);
  }

  async getCollection(collectionName) {
    const db = client.db("movie_rental");
    this.collection = db.collection(collectionName);

    return this.collection;
  }

  async listMovies() {
    const db = client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const result = moviesCollection.find("").project({ title: 1 }).sort({ title: 1 });

    console.log(result);

    return result;
  }

  async insertMovie(movie) {
    const db = client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const result = await moviesCollection.insertOne(movie);

    console.log(result);
  }

  async deleteMovieById(id) {
    const db = client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const result = moviesCollection.deleteOne(ObjectId(id));

    console.log(result);
  }
}

module.exports = new Database();
