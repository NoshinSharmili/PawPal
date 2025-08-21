const express = require('express');
<<<<<<< HEAD
const { submitAdoptionApplication, getApplicationsForUserPets, getAdoptionApplicationById, updateAdoptionApplicationStatus } = require('../controllers/adoptionApplicationController');
const router = express.Router();

router.post('/', submitAdoptionApplication);
router.get('/user/:userId', getApplicationsForUserPets);
router.get('/:id', getAdoptionApplicationById);
router.patch('/:id/status', updateAdoptionApplicationStatus);
=======
const { submitAdoptionApplication } = require('../controllers/adoptionApplicationController');
const router = express.Router();

router.post('/', submitAdoptionApplication);
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98

module.exports = router; 