const express = require("express");
const router = express.Router();
const { getAllClients, getClient, searchClient, modifyClient } = require("./clienti");
router.route('/api/clienti').get(getAllClients);
router.route('/api/clienti/:id').get(getClient);
router.route('/api/search/clients').post(searchClient);
router.route('/api/clienti/modify').post(modifyClient);
module.exports = router;