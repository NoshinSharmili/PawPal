import Pet from '../models/Pet.js';

// GET /api/pets
export const getAllPets = async (_req, res) => {
  try {
    const pets = await Pet.find().populate('owner');
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/pets
export const createPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    await pet.populate('owner');
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
