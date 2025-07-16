const AdoptionApplication = require('../models/AdoptionApplication');

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
      reasonToAdopt
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
      reasonToAdopt
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { submitAdoptionApplication }; 