var mongoose = require("mongoose");

var imageSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("images", imageSchema);
