const express = require('express');
const { submitAdoptionApplication, getApplicationsForUserPets, getAdoptionApplicationById, updateAdoptionApplicationStatus } = require('../controllers/adoptionApplicationController');
const router = express.Router();

router.post('/', submitAdoptionApplication);
router.get('/user/:userId', getApplicationsForUserPets);
router.get('/:id', getAdoptionApplicationById);
router.patch('/:id/status', updateAdoptionApplicationStatus);

module.exports = router; 