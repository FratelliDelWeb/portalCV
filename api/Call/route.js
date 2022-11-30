const express = require("express");
const router = express.Router();
const { call, returnTwiml } = require("./call");
router.route('/api/call').post(call);
router.route('/api/outbound/:salesNumber').post(returnTwiml);
/* router.route('/api/call/antonioM').post(addCallerID); */
module.exports = router;