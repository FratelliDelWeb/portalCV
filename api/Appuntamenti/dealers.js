const Model = require('../../model/Appuntamento');

//Totale appuntamenti
exports.getAppuntamenti = async (req, res, next) => {
    try{
        const data = await Model.find().limit(1000);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getAppuntamento = async (req, res, next) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//Totale appuntamenti parlati
exports.getAppuntamentiParlati = async (req, res, next) => {
}

//A00
//Totale appuntamenti negativi
exports.getAppuntamentiNegativi = async (req, res, next) => {
    try{
        const data = await Model.find(
            {Esito : "A00"}
        );
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//A01
//Totale appuntamenti positivi
exports.getAppuntamentiPositivi = async (req, res, next) => {
    try{
        const data = await Model.find(
            {Esito : "A01"}
        );
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//Totale appuntamenti fissati
exports.getAppuntamentiFissati = async (req, res, next) => {

}

//Totale appuntamenti fissati e positivi
exports.getAppuntamentiFissatiEPositivi = async (req, res, next) => {

}

//Totale appuntamenti non ricevuti da non rifissare 
/* exports.getAppuntamenti = async (req, res, next) => {

} */

//Totale appuntamenti non ricevuti da rifissare
/* exports.getAppNotRecAndRefix = async (req, res, next) => {

} */

//Totale appuntamenti assenti
exports.getAppuntamentiAssenti = async (req, res, next) => {

}


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