import express from 'express';
import { getUser } from '../controllers/userController.js';
import { getAllPets, createPet } from '../controllers/petController.js';

const router = express.Router();

/* User */
router.get('/user/:id', getUser);

/* Pets */
router.get('/pets', getAllPets);
router.post('/pets', createPet);

export default router;
