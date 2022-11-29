const Mongoose = require("mongoose")
const AppuntamentoSchema = new Mongoose.Schema({
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
  OpereAcquistate: {
    type: String,
  },
  Note: {
    type: String
  },
  CodiceAgenzia: {
    type: Number
  },
  CodiceCollaboratore : {
    type: String
  },
  ImportoAcquistato : {
    type: Number
  },
  ImportoRata : {
    type: Number
  },
})

const Appuntamento = Mongoose.model("Appuntamenti", AppuntamentoSchema)
module.exports = Appuntamento