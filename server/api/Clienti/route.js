const express = require("express");
const router = express.Router();
const { getAllClients, getClient } = require("./clienti");
router.route('/clienti').get(getAllClients);
router.route('/clienti/:id').get(getClient);

module.exports = router;