const Model = require('../../model/Telefonata');

//T00 - Esito negativo
//T01 - Esito positivo
//T02 - Esito fissato
//T03 - Esito assente
//T04 - Esito da rifissare


//Totale appuntamenti
exports.getTelefonate = async (req, res, next) => {
    try{
        const data = await Model.find().limit(1000);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getTelefonata = async (req, res, next) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//Totale appuntamenti negativi
exports.getTelefonateNegative = async (req, res, next) => {
    try{
        const data = await Model.find(
            {Esito : "T00"}
        );
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//Totale appuntamenti positivi
exports.getTelefonatePositive = async (req, res, next) => {
    try{
        const data = await Model.find(
            {Esito : "T01"}
        );
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//Totale appuntamenti da rifissare
exports.getTelefonateDaRichiamare = async (req, res, next) => {
  try{
      const data = await Model.find(
          {Esito : "T04"}
      );
      res.json(data)
  }catch(error){
      res.status(500).json({message: error.message})
  }
}

//Totale appuntamenti fissati
exports.getTelefonateFissate = async (req, res, next) => {
    try{
      const data = await Model.find(
          {Esito: "T02",
           Data: new Date().toDateString()  
        }
      );
      res.json(data)
  }catch(error){
      res.status(500).json({message: error.message})
  }
}

//Totale appuntamenti assenti
exports.getTelefonateAssenti = async (req, res, next) => {
  try{
    const data = await Model.find(
        {Esito : "T03"}
    );
    res.json(data)
}catch(error){
    res.status(500).json({message: error.message})
}
}

exports.updateTelefonata = async (req, res, next) => {
  const { esito, id } = req.body;
  if (esito && id) {
      await Model.findById(id)
        .then((appuntamento) => {
          if (appuntamento.Esito !== esito) {
            appuntamento.Esito = esito;
            appuntamento.save((err) => {
              //Monogodb error checker
              if (err) {
                res.status("400").json({ message: "An error occurred", error: err.message });
                process.exit(1);
              }
              res.status("201").json({ message: "Update successful", user });
            });
          } else {
            res.status(400).json({ message: "Already done"});
          }
        })
        .catch((error) => {
          res.status(400).json({ message: "An error occurred", error: error.message });
        });
  }
}

exports.searchTelefonata = async (req, res, next) => {
  try{

    const body = req.body;
    const search = body.query;

    let getType = (field) => {
        return Model.schema.paths[field].instance;
    }

    let query = {
        "$and": [],
        "$or" : []
    };

    if(search){
        for(let i = 0; i < Object.keys(search).length; i++){
            if(search[Object.keys(search)[i]]){
                const field = search[Object.keys(search)[i]]
                const fieldName = Object.keys(search)[i]
                const fieldType = getType(fieldName);
                if(field.length > 0){
                    switch(fieldType){
                        case "Number":
                            for(let k = 0; k < field.length; k++){
                                let fieldMDB = {}
/*                                     let equalsComparator = [];
                                let inequalsComparator = []; */
                                switch(field[k].operation){
                                    case "not contains":
                                        //Number can't
                                        break;
                                    case "equal":
                                        fieldMDB["$in"] = field[k].value;
                                        break;
                                    case "not equal":
                                        fieldMDB["$ne"] = field[k].value;
                                        break;
                                    case "is empty":
                                        fieldMDB["$exists"] = true;
                                        fieldMDB["$in"] = ["",null,0];
                                        break;
                                    case "is not empty":
                                        fieldMDB["$exists"] = true;
                                        fieldMDB["$ne"] = "";
                                        break;
                                    case "greater than":
                                        fieldMDB["$gt"] = field[k].value;
                                        break;
                                    case "lower than":
                                        fieldMDB["$lt"] = field[k].value;
                                        break;
                                    case "lower than equal":
                                        fieldMDB["$lte"] = field[k].value;
                                        break;
                                    case "greater than equal":
                                        fieldMDB["$gte"] = field[k].value;
                                        break;
                                    default:
                                        fieldMDB = field[k].value;
                                        break;
                                }
    
                                const objectToPush = {};
                                switch(field[k].logic){
                                    case "or":
                                        objectToPush[fieldName] = fieldMDB;
                                        query["$or"].push(objectToPush);
                                        break;
                                    case "and":
                                        objectToPush[fieldName] = fieldMDB;
                                        query["$and"].push(objectToPush);
                                        break;
                                    default: 
                                        objectToPush[fieldName] = fieldMDB;
                                        query["$or"].push(objectToPush);
                                        break;
                                }
                        }
                            break;
                        case "String":
                            for(let k = 0; k < field.length; k++){
                                let fieldMDB = {}
/*                                     let equalsComparator = [];
                                let inequalsComparator = []; */
                                switch(field[k].operation){
                                    case "not contains":
                                        fieldMDB["$not"] = new RegExp(field[k].value, 'i');
                                        break;
                                    case "equal":
                                        fieldMDB = field[k].value;
                                        break;
                                    case "not equal":
                                        fieldMDB["$ne"] = field[k].value;
                                        break;
                                    case "is empty":
                                        fieldMDB["$exists"] = true;
                                        fieldMDB["$in"] = ["",null,0];
                                        break;
                                    case "is not empty":
                                        fieldMDB["$exists"] = true;
                                        fieldMDB["$ne"] = "";
                                        break;
                                    default:
                                        fieldMDB["$in"] = new RegExp(field[k].value, 'i');
                                        break;
                                }
    
                                const objectToPush = {};
                                switch(field[k].logic){
                                    case "or":
                                        objectToPush[fieldName] = fieldMDB;
                                        query["$or"].push(objectToPush);
                                        break;
                                    case "and":
                                        objectToPush[fieldName] = fieldMDB;
                                        query["$and"].push(objectToPush);
                                        console.log("Sotto query")
                                        console.log(query)
                                        break;
                                    default: 
                                        objectToPush[fieldName] = fieldMDB;
                                        query["$or"].push(objectToPush);
                                        break;
                                }
                        }
                            break;
                        default: 
                            break;
                    }
            }
        }
    }
}
    //Per non rompere la query
    if(!query["$or"].length > 0){
        delete query["$or"];
    }

    if(!query["$and"].length > 0){
        delete query["$and"];
    }
    
    console.log(JSON.stringify(query))
    const data = await Model.find(query)

    res.json({
            data
    });
  }catch(error){
      res.status(500).json({message: error.message});
  }
}