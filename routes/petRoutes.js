const express = require('express');
<<<<<<< HEAD
const { createPet, getPetsByUser, getAllPets, getPetById, getPresignedUrl, deletePet, updatePetAdoptionStatus }= require('../controllers/petController');
const router = express.Router();

router.post('/', createPet);
router.post('/presigned-url', getPresignedUrl);
router.get('/user/:userId', getPetsByUser);
router.get('/', getAllPets);
router.get('/:id', getPetById);
router.patch('/:id/adoption-status', updatePetAdoptionStatus);

router.delete('/:id', deletePet);
=======
const { createPet, getPetsByUser, getAllPets, getPetById, deletePet } = require('../controllers/petController');
const router = express.Router();

router.post('/', createPet);
router.get('/user/:userId', getPetsByUser);
router.get('/', getAllPets);
router.get('/:id', getPetById);
router.delete('/:id', deletePet); // NEW: Delete route

>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
module.exports = router;