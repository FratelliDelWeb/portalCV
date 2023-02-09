const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const connectDB = require("./db");

const clientsRoute = require("./api/Candidati/route");
const usersRoute = require("./api/Users/route");

const { adminAuth, userAuth } = require("./middleware/auth");

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", require("./Auth/Route"));
app.use("/api", router);

app.get("/api/users", userAuth, usersRoute);
app.get("/api/users/:id", userAuth, usersRoute);
app.get("/api/clienti", userAuth, clientsRoute);
app.get("/api/clienti/:id", userAuth, clientsRoute);
app.post("/api/search/clients", userAuth, clientsRoute);
app.post("/api/clienti/modify", userAuth, clientsRoute);

app.get("/admin", adminAuth, (req, res) =>
  res.send({
    canAccess: true,
  })
);
app.get("/basic", userAuth, (req, res) =>
  res.send({
    canAccess: true,
  })
);

app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});

const PORT = process.env.PORT || 5000;

connectDB();

const path = require("path");

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "/client/build")));

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));

// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
