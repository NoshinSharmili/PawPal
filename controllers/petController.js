const Pet = require('../models/Pet');

const createPet = async (req, res) => {
  try {
    const {
      name,
      type,
      breed,
      dob,
      healthStatus,
      vaccinationStatus,
      feedingStatus,
      adoptionStatus,
      needVaccination,
      transferredFood,
      userId
      // shelterProviderId,
      // rescuerId,
      // vetId
    } = req.body;

    const pet = new Pet({
      name,
      type,
      breed,
      dob,
      healthStatus,
      vaccinationStatus,
      feedingStatus,
      adoptionStatus,
      needVaccination,
      transferredFood,
      userId
      // shelterProviderId,
      // rescuerId,
      // vetId
    });

    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getPetsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const pets = await Pet.find({ userId });
    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPet, getPetsByUser, getAllPets, getPetById };