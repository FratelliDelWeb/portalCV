const express = require("express");
const router = express.Router();
const { getAllClients, getClient } = require("./clienti");
router.route('/api/clienti').get(getAllClients);
router.route('/api/clienti/:id').get(getClient);

module.exports = router;