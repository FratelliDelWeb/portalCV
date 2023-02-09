const express = require("express");
const router = express.Router();
const { getAll, getOne, search } = require("./candidati");
router.route("/api/candidati").get(getAll);
router.route("/api/candidati/:id").get(getOne);
router.route("/api/search/candidati").post(search);
module.exports = router;
