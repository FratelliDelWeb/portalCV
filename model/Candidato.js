const Mongoose = require("mongoose");
const Document = require("./Document.js");

const candidatoSchema = new Mongoose.Schema({
  // no _id designation, mongo will create
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  documents: [Document.schema],
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Candidato = Mongoose.model("candidates", candidatoSchema);
module.exports = Candidato;
