const AdoptionApplication = require('../models/AdoptionApplication');
<<<<<<< HEAD
const Pet = require('../models/Pet');
=======
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98

const submitAdoptionApplication = async (req, res) => {
  try {
    const {
      petId,
      fullName,
      profession,
      email,
      address,
      isHousePetProofed,
      familyInformation,
      nidNumber,
      phoneNumber,
<<<<<<< HEAD
      reasonToAdopt,
      status // allow status to be set optionally
=======
      reasonToAdopt
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
    } = req.body;

    const application = new AdoptionApplication({
      petId,
      fullName,
      profession,
      email,
      address,
      isHousePetProofed,
      familyInformation,
      nidNumber,
      phoneNumber,
<<<<<<< HEAD
      reasonToAdopt,
      status // set status if provided, otherwise schema default
=======
      reasonToAdopt
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

<<<<<<< HEAD
const getApplicationsForUserPets = async (req, res) => {
  try {
    const { userId } = req.params;
    // Find all pets owned by the user
    const pets = await Pet.find({ userId });
    const petIds = pets.map(pet => pet._id);
    // Find all adoption applications for these pets, and populate pet details
    const applications = await AdoptionApplication.find({ petId: { $in: petIds } }).populate('petId');
    res.json(applications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAdoptionApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await AdoptionApplication.findById(id).populate('petId');
    if (!application) {
      return res.status(404).json({ error: 'Adoption application not found' });
    }
    res.json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update status of an adoption application
const updateAdoptionApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    const application = await AdoptionApplication.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!application) {
      return res.status(404).json({ error: 'Adoption application not found' });
    }
    res.json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { submitAdoptionApplication, getApplicationsForUserPets, getAdoptionApplicationById, updateAdoptionApplicationStatus }; 
=======
module.exports = { submitAdoptionApplication }; 
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
