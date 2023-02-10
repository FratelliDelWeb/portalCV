const express = require("express");
const router = express.Router();
const { getAll, getOne, search, modify } = require("./candidati");
router.route("/api/candidates").get(getAll);
router.route("/api/candidates/:id").get(getOne);
router.route("/api/search/candidates").post(search);
router.route("/api/candidates/modify").post(modify);
module.exports = router;
