const express = require('express');
const { createPet, getPetsByUser, getAllPets, getPetById, deletePet } = require('../controllers/petController');
const router = express.Router();

router.post('/', createPet);
router.get('/user/:userId', getPetsByUser);
router.get('/', getAllPets);
router.get('/:id', getPetById);
router.delete('/:id', deletePet); // NEW: Delete route

module.exports = router;