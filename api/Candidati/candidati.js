const Model = require("../../model/Candidato");

exports.getAll = async (req, res, next) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res, next) => {
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
                res
                  .status("400")
                  .json({ message: "An error occurred", error: err.message });
                process.exit(1);
              }
              res.status("201").json({ message: "Update successful", user });
            });
          } else {
            res.status(400).json({ message: "User is already an Admin" });
          }
        })
        .catch((error) => {
          res
            .status(400)
            .json({ message: "An error occurred", error: error.message });
        });
    }
  }
};

exports.modify = async (req, res, next) => {
  const data = req.body;
  const id = data.id;
  const field = data.field;
  const fieldName = field.name;
  const fromValue = field.from;
  const toValue = field.to;

  if (id) {
    await Model.findById(id)
      .then((client) => {
        console.log(client);
        console.log("value : " + client[fieldName]);
        if (client[fieldName] === fromValue) {
          client[fieldName] = toValue;
          client.save((err) => {
            //Monogodb error checker
            if (err) {
              res
                .status("400")
                .json({ message: "An error occurred", error: err.message });
              process.exit(1);
            }
            res.status("201").json({ message: "Update successful", client });
          });
        } else {
          res.status(402).json({ message: "Not same value" });
        }
      })
      .catch((error) => {
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message });
      });
  }
};

exports.search = async (req, res, next) => {
  try {
    const body = req.body;
    const search = body.query;
    const page = body.page;
    const limit = body.limit;

    const query = {};

    //Number
    if (search) {
      if (search.surname) {
        const cognome = search.surname;
        if (surname.operation) {
          query.surname = {};
          switch (surname.operation) {
            case "not contains":
              query.surname["$not"] = new RegExp(surname.value, "i");
              break;
            case "equal":
              query.surname = surname.value;
              break;
            case "not equal":
              query.surname["$ne"] = surname.value;
              break;
            case "is empty":
              query.surname["$exists"] = true;
              query.surname["$in"] = ["", null, 0];
              break;
            case "is not empty":
              query.surname["$exists"] = true;
              query.surname["$ne"] = "";
              break;
            default:
              query.surname = new RegExp(surname.value, "i");
              break;
          }
        }
      }

      if (search.email) {
        const email = search.email;
        if (email.operation) {
          query.email = {};
          switch (email.operation) {
            case "not contains":
              query.email["$not"] = new RegExp(email.value, "i");
              break;
            case "equal":
              query.email = email.value;
              break;
            case "not equal":
              query.email["$ne"] = email.value;
              break;
            case "is empty":
              query.email["$exists"] = true;
              query.email["$in"] = ["", null, 0];
              break;
            case "is not empty":
              query.email["$exists"] = true;
              query.email["$ne"] = "";
              break;
            default:
              query.email = new RegExp(email.value, "i");
              break;
          }
        }
      }

      if (search.località) {
        const località = search.località;
        if (località.operation) {
          query.località = {};
          switch (località.operation) {
            case "not contains":
              query.località["$not"] = new RegExp(località.value, "i");
              break;
            case "equal":
              query.località = località.value;
              break;
            case "not equal":
              query.località["$ne"] = località.value;
              break;
            case "is empty":
              query.località["$exists"] = true;
              query.località["$in"] = ["", null, 0];
              break;
            case "is not empty":
              query.località["$exists"] = true;
              query.località["$ne"] = "";
              break;
            default:
              query.località = new RegExp(località.value, "i");
              break;
          }
        }
      }

      if (search.name) {
        const nome = search.name;
        if (nome.operation) {
          query.name = {};
          switch (nome.operation) {
            case "not contains":
              query.name["$not"] = new RegExp(name.value, "i");
              break;
            case "equal":
              query.name = name.value;
              break;
            case "not equal":
              query.name["$ne"] = name.value;
              break;
            case "is empty":
              query.name["$exists"] = true;
              query.name["$in"] = ["", null, 0];
              break;
            case "is not empty":
              query.name["$exists"] = true;
              query.name["$ne"] = "";
              break;
            default:
              query.name = new RegExp(name.value, "i");
              break;
          }
        }
      }

      if (search.phone) {
        const phone = search.phone;
        if (phone.operation) {
          query.phone = {};
          switch (phone.operation) {
            case "not contains":
              query.phone["$not"] = new RegExp(phone.value, "i");
              break;
            case "equal":
              query.phone = phone.value;
              break;
            case "not equal":
              query.phone["$ne"] = phone.value;
              break;
            case "is empty":
              query.phone["$exists"] = true;
              query.phone["$in"] = ["", null, 0];
              break;
            case "is not empty":
              query.phone["$exists"] = true;
              query.phone["$ne"] = "";
              break;
            default:
              query.phone = new RegExp(phone.value, "i");
              break;
          }
        }
      }

      if (search.telephone) {
        const telephone = search.telephone;
        if (telephone.operation) {
          query.telephone = {};
          switch (telephone.operation) {
            case "not contains":
              query.telephone["$not"] = new RegExp(telephone.value, "i");
              break;
            case "equal":
              query.telephone = telephone.value;
              break;
            case "not equal":
              query.telephone["$ne"] = telephone.value;
              break;
            case "is empty":
              query.telephone["$exists"] = true;
              query.telephone["$in"] = ["", null, 0];
              break;
            case "is not empty":
              query.telephone["$exists"] = true;
              query.telephone["$ne"] = "";
              break;
            default:
              query.telephone = new RegExp(telephone.value, "i");
              break;
          }
        }
      }
    }

    // console.log(search.Denominazione)

    const data = await Model.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Model.count().count();

    // return response with posts, total pages, and current page
    res.json({
      data,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
