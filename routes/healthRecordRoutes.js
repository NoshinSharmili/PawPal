const express = require('express');
const router = express.Router();
const healthRecordController = require('../controllers/healthRecordController');

// Get HealthRecord by ID
router.get('/:id', healthRecordController.getHealthRecordById);

// Update each field individually
router.patch('/:id/lastVetVisit', healthRecordController.updateLastVetVisit);
router.patch('/:id/vetVisitIntervalWeeks', healthRecordController.updateVetVisitIntervalWeeks);
router.patch('/:id/vaccines', healthRecordController.updateVaccines);
router.patch('/:id/dewormingLastDate', healthRecordController.updateDewormingLastDate);
router.patch('/:id/dewormingIntervalWeeks', healthRecordController.updateDewormingIntervalWeeks);
router.patch('/:id/weight', healthRecordController.updateWeight);

module.exports = router;
