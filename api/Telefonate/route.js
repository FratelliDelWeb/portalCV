const express = require("express");
const router = express.Router();
const { 
    getTelefonata,
    getTelefonate,
    getTelefonateAssenti,
    getTelefonateDaRichiamare,
    getTelefonateFissate,
    getTelefonateNegative,
    getTelefonatePositive,
    searchTelefonata,
    updateTelefonata
} = require("./teleoperatrici");

router.route('/api/telefonate').get(getTelefonate);
router.route('/api/telefonate/:id').get(getTelefonata);
router.route('/api/telefonate/assenti').get(getTelefonateAssenti);
router.route('/api/telefonate/positivi').get(getTelefonateNegative);
router.route('/api/telefonate/negativi').get(getTelefonatePositive);
router.route('/api/telefonate/to-recall').get(getTelefonateDaRichiamare);
router.route('/api/telefonate/called').get(getTelefonateFissate);

router.route('/api/telefonate/modify').post(updateTelefonata);
router.route('/api/search/telefonate').post(searchTelefonata);
module.exports = router;