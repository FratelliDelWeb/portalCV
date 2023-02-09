const express = require("express");
const router = express.Router();
const { getAll, getOne, search, modify } = require("./users");
router.route("/api/users").get(getAll);
router.route("/api/users/:id").get(getOne);
router.route("/api/search/user").get(search);
router.route("/api/users/modify").get(modify);

module.exports = router;
