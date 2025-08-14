const Vet = require('../models/Vet');

const getAllVets = async (req, res) => {
  try {
    const vets = await Vet.find();
    res.json(vets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const bulkCreateVets = async (req, res) => {
  try {
    const vetList = req.body;
    if (!Array.isArray(vetList)) {
      return res.status(400).json({ error: 'Request body must be an array of vet objects.' });
    }
    const createdVets = [];
    for (const vetData of vetList) {
      const vet = new Vet(vetData);
      await vet.save();
      createdVets.push(vet);
    }
    res.status(201).json(createdVets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllVets, bulkCreateVets }; 