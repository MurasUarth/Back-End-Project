const { MongoClient, ObjectId } = require("mongodb");

class Database {
  constructor() {
    this.url = "mongodb://localhost:27017";
    this.client = new MongoClient(this.url);
  }

  async run() {
    await this.client.connect();
  }

  async getCollection(collectionName) {
    const db = this.client.db("movie_rental");
    this.collection = db.collection(collectionName);

    return this.collection;
  }
}

module.exports = new Database();
