const Model = require('../../model/Cliente');

exports.getAllClients = async (req, res, next) => {
    try{
        const data = await Model.find({ Telefono1: { $ne: ""} }).limit(10);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
};

exports.getClient = async (req, res, next) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
};

exports.updateClient = async (req, res, next) => {
    const { role, id } = req.body;
    if (role && id) {
      if (role === "admin") {
        await Clienti.findById(id)
          .then((client) => {
            // Third - Verifies the user is not an admin
            if (user.role !== "admin") {
              user.role = role;
              user.save((err) => {
                //Monogodb error checker
                if (err) {
                  res.status("400").json({ message: "An error occurred", error: err.message });
                  process.exit(1);
                }
                res.status("201").json({ message: "Update successful", user });
              });
            } else {
              res.status(400).json({ message: "User is already an Admin" });
            }
          })
          .catch((error) => {
            res.status(400).json({ message: "An error occurred", error: error.message });
          });
      }
    }
};

exports.modifyClient = async (req, res, next) => {
    const data = req.body;
    const id = data.id;
    const field = data.field;
    const fieldName = field.name;
    const fromValue = field.from;
    const toValue = field.to;

    if (id) {
        await Model.findById(id)
          .then((client) => {
            console.log(client)
            console.log( "value : " + client[fieldName])
            if(client[fieldName] === fromValue){
                client[fieldName] = toValue;
                client.save((err) => {
                    //Monogodb error checker
                    if (err) {
                      res.status("400").json({ message: "An error occurred", error: err.message });
                      process.exit(1);
                    }
                    res.status("201").json({ message: "Update successful", client });
                  });
            } else {
                res.status(402).json({ message: "Not same value" });
            }
          })
          .catch((error) => {
            res.status(400).json({ message: "An error occurred", error: error.message });
          });
    }
};

exports.searchClient = async (req, res, next) => {
    try{

        const body = req.body;
        const search = body.query;
        const page = body.page;
        const limit = body.limit;

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
        .limit(limit * 1)
        .skip((page - 1) * limit)

        const count = await Model.count()
        .count()

        // return response with posts, total pages, and current page
        res.json({
                data,
                totalPages: Math.ceil(count / limit),
                currentPage: page
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
