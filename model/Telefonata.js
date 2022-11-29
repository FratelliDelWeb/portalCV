const Mongoose = require("mongoose")
const TelefonataSchema = new Mongoose.Schema({
  Operatore: {
    type: String,
    required: true,
  },
  Cliente: {
    type: String,
    required: true,
  },
  Data: {
    type: Date,
    required: true,
  },
  Esito: {
    type: String,
  },
  Note: {
    type: String,
  },
  OpereAcquistate: {
    type: String
  },
  CodiceAgenzia: {
    type: Number
  },
})

const Telefonata = Mongoose.model("Telefonate", TelefonataSchema)
module.exports = Telefonata