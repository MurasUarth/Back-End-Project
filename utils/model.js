const { ObjectId } = require("mongodb");
const database = require("./database");

class Model {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  async getCollection() {
    return database.getCollection(this.collectionName);
  }

  async findById(id) {
    console.log(id);
    const target = await this.collection.findOne({ _id: ObjectId(id) });

    return target;
  }
}

module.exports = Model;
