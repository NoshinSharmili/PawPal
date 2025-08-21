const express = require('express');
const { createPet, getPetsByUser, getAllPets, getPetById, getPresignedUrl, deletePet, updatePetAdoptionStatus }= require('../controllers/petController');
const router = express.Router();

router.post('/', createPet);
router.post('/presigned-url', getPresignedUrl);
router.get('/user/:userId', getPetsByUser);
router.get('/', getAllPets);
router.get('/:id', getPetById);
router.patch('/:id/adoption-status', updatePetAdoptionStatus);

router.delete('/:id', deletePet);
module.exports = router;