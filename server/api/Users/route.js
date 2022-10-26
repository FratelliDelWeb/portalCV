const express = require("express");
const router = express.Router();
const { getAllUsers, getUser } = require("./users");
router.route('/api/users').get(getAllUsers);
router.route('/api/users/:id').get(getUser);

module.exports = router;