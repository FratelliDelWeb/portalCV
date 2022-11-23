const Model = require('../../model/Telefonata');

//Totale appuntamenti parlati
exports.getAppParlati = async (req, res, next) => {
    try{
        const data = await Model.find().limit(1000);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//A00
//Totale appuntamenti negativi
exports.getAppNeg = async (req, res, next) => {

}

//A01
//Totale appuntamenti positivi
exports.getAppNeg = async (req, res, next) => {

}

//Totale appuntamenti fissati
exports.getAppFix = async (req, res, next) => {

}

//Totale appuntamenti fissati e positivi
exports.getAppFixAndPos = async (req, res, next) => {

}

//Totale appuntamenti non ricevuti da non rifissare 
exports.getAppParlNotRecAndNotRefix = async (req, res, next) => {

}

//Totale appuntamenti non ricevuti da rifissare
exports.getAppNotRecAndRefix = async (req, res, next) => {

}

//Totale appuntamenti assenti
exports.getAppAss = async (req, res, next) => {

}