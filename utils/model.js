const { ObjectId } = require("mongodb");
const database = require("./database");

class Model {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  get collection() {
    return database.getCollection(this.collectionName);
  }

  async findById(id) {
    return await this.collection.findOne({ _id: ObjectId(id) });
  }
}

module.exports = new Model();
