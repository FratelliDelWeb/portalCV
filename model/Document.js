var mongoose = require("mongoose");

var documentSchema = new mongoose.Schema({
  // no _id designation, mongo will create
  title: {
    type: String,
    required: true,
  },
  desccription: {
    type: String,
    required: true,
  },
  type: {
    data: Buffer,
    contentType: String,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("documents", documentSchema);
