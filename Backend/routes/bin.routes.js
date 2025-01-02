const express = require('express');
const router = express.Router();
const binController = require('../controllers/bin.controller');


router.post('/bin', binController.createBin);

router.get('/getbin', binController.getBinDetails);

router.get('/bins', binController.getAllBins);

module.exports = router;
