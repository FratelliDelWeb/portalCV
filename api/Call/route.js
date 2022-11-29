const express = require("express");
const router = express.Router();
const { makeCall, addCallerID, returnTwiml } = require("./call");
router.route('/api/call').post(makeCall);
router.route('/api/call/request').get(returnTwiml);
/* router.route('/api/call/antonioM').post(addCallerID); */
module.exports = router;