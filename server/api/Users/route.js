const express = require("express");
const router = express.Router();
const { getAllUsers, getUser } = require("./users");
router.route('/users').get(getAllUsers);
router.route('/user/:id').get(getUser);

module.exports = router;