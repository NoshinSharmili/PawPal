const express = require('express');
const { submitAdoptionApplication } = require('../controllers/adoptionApplicationController');
const router = express.Router();

router.post('/', submitAdoptionApplication);

module.exports = router; 