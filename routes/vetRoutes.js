const express = require('express');
const { getAllVets, bulkCreateVets } = require('../controllers/vetController');
const router = express.Router();

router.get('/', getAllVets);
router.post('/bulk', bulkCreateVets);

module.exports = router; 