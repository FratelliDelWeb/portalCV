const Model = require("../../model/User");

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
      if (search.username) {
        const username = search.username;
        if (username.operation) {
          query.username = {};
          switch (cognome.username) {
            case "not contains":
              query.username["$not"] = new RegExp(username.value, "i");
              break;
            case "equal":
              query.username = username.value;
              break;
            case "not equal":
              query.username["$ne"] = username.value;
              break;
            case "is empty":
              query.username["$exists"] = true;
              query.username["$in"] = ["", null, 0];
              break;
            case "is not empty":
              query.username["$exists"] = true;
              query.username["$ne"] = "";
              break;
            default:
              query.username = new RegExp(username.value, "i");
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
