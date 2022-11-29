const express = require("express");
const router = express.Router();
const { 
    getAppuntamento,
    getAppuntamenti,
    getAppuntamentiAssenti,
    getAppuntamentiDaRifissare,
    getAppuntamentiFissati,
    getAppuntamentiNegativi,
    getAppuntamentiPositivi,
    searchAppuntamento,
    updateAppuntamento
} = require("./dealers");

router.route('/api/appuntamenti').get(getAppuntamenti);
router.route('/api/appuntamenti/:id').get(getAppuntamento);
router.route('/api/appuntamenti/assenti').get(getAppuntamentiAssenti);
router.route('/api/appuntamenti/positivi').get(getAppuntamentiNegativi);
router.route('/api/appuntamenti/negativi').get(getAppuntamentiPositivi);
router.route('/api/appuntamenti/to-fix').get(getAppuntamentiDaRifissare);
router.route('/api/appuntamenti/fixed').get(getAppuntamentiFissati);

router.route('/api/appuntamenti/modify').post(updateAppuntamento);
router.route('/api/search/appuntamenti').post(searchAppuntamento);
module.exports = router;