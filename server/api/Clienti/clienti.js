const Model = require('../../model/Cliente');

exports.getAllClients = async (req, res, next) => {
    try{
        const data = await Model.find().limit(100);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getClient = async (req, res, next) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
