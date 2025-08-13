const express = require('express');
const { createPet, getPetsByUser, getAllPets, getPetById } = require('../controllers/petController');
const router = express.Router();

router.post('/', createPet);
router.get('/user/:userId', getPetsByUser);
router.get('/', getAllPets);
router.get('/:id', getPetById);

module.exports = router;