const Database = require("../utils/database");
const Model = require("../utils/model");

class MovieUnitsModel extends Model {
  constructor() {
    super("movie_units");
  }

  async rent(id) {
    const movieUnitsCollection = Database.getCollection(this.collectionName);
    const toBeUpdated = await this.findById(id);
    const result = movieUnitsCollection.updateOne(toBeUpdated);

    console.log(result);
  }

  async return(id) {}
}

module.exports = MovieUnitsModel();
