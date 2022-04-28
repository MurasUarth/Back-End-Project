const { MongoClient, ObjectId } = require('mongodb')

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

class Database {
  
  async run (limit, skip) {

    await client.connect();

    const db = client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const cursor = moviesCollection
      .find("")
      .project({ title: 1 })
      .sort({ title: 1 });
    if (limit) {
      cursor.limit(limit);
    }

    if (skip) {
      cursor.skip(skip);
    }

    const movies = await cursor.toArray();

    console.log(movies);
  }

  async listMovies () {

    await client.connect();

    const db = client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const result = moviesCollection
      .find("")
      .project({ title: 1 })
      .sort({ title: 1 });
    
    return result;

    console.log(result);
  }

  async insertMovie (movie) {
    await client.connect();

    const db = client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const result = await moviesCollection.insertOne(movie);

    console.log(result);
  }

  async deleteMovieById (id) {
    await client.connect();

    const db = client.db("movie_rental");
    const moviesCollection = db.collection("movies");

    const result = moviesCollection.deleteOne(ObjectId(id));

    console.log(result);
  }
}

module.exports = Database;
