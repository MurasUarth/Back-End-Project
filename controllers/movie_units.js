const MovieUnitsModel = require("../models/movie_units");

class MovieUnitsController {
  async patch(body, id) {
    if (body == "rent") {
      const result = await MovieUnitsModel.rent(id);
      return result;
    }

    if (body == "return") {
      const result = await MovieUnitsModel.return(id);
      return result;
    }
  }
}

module.exports = MovieUnitsController;
