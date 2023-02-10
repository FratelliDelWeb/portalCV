const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const connectDB = require("./db");

const candidatesRoute = require("./api/Candidati/route");
const usersRoute = require("./api/Users/route");
/* const appuntamentiRoute = require("./api/Appuntamenti/route"); */

const { adminAuth, userAuth } = require("./middleware/auth");

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", require("./api/Auth/Route"));
app.use("/api", router);

app.get("/api/users", userAuth, usersRoute);
app.get("/api/users/:id", userAuth, usersRoute);

app.get("/api/candidates", userAuth, candidatesRoute);
app.get("/api/candidates/:id", userAuth, candidatesRoute);
app.post("/api/search/candidates", userAuth, candidatesRoute);
app.post("/api/candidates/modify", userAuth, candidatesRoute);

/* app.get("/api/telefonate", userAuth, telefonateRoute);
app.get("/api/telefonate/:id", userAuth, telefonateRoute);
app.get("/api/telefonate/assenti", userAuth, telefonateRoute);
app.get("/api/telefonate/positivi", userAuth, telefonateRoute);
app.get("/api/telefonate/negativi", userAuth, telefonateRoute);
app.get("/api/telefonate/to-recall", userAuth, telefonateRoute);
app.get("/api/telefonate/called", userAuth, telefonateRoute);
app.post("/api/telefonate/modify", userAuth, telefonateRoute);
app.post("/api/search/telefonate", userAuth, telefonateRoute); */
/* 
app.get("/api/appuntamenti", userAuth, appuntamentiRoute);
app.get("/api/appuntamenti/:id", userAuth, appuntamentiRoute);
app.get("/api/appuntamenti/assenti", userAuth, appuntamentiRoute);
app.get("/api/appuntamenti/positivi", userAuth, appuntamentiRoute);
app.get("/api/appuntamenti/negativi", userAuth, appuntamentiRoute);
app.get("/api/appuntamenti/to-fix", userAuth, appuntamentiRoute);
app.get("/api/appuntamenti/fixed", userAuth, appuntamentiRoute);
app.post("/api/appuntamenti/modify", userAuth, appuntamentiRoute);
app.post("/api/search/appuntamenti", userAuth, appuntamentiRoute); */

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
