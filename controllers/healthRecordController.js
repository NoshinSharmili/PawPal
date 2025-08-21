const HealthRecord = require('../models/HealthRecord');

// Get HealthRecord by ID
exports.getHealthRecordById = async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    if (!record) return res.status(404).json({ message: 'HealthRecord not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update lastVetVisit
exports.updateLastVetVisit = async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { lastVetVisit: req.body.lastVetVisit },
      { new: true }
    );
    if (!record) return res.status(404).json({ message: 'HealthRecord not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update vetVisitIntervalWeeks
exports.updateVetVisitIntervalWeeks = async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { vetVisitIntervalWeeks: req.body.vetVisitIntervalWeeks },
      { new: true }
    );
    if (!record) return res.status(404).json({ message: 'HealthRecord not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update vaccines array
exports.updateVaccines = async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { vaccines: req.body.vaccines },
      { new: true }
    );
    if (!record) return res.status(404).json({ message: 'HealthRecord not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update dewormingLastDate
exports.updateDewormingLastDate = async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { dewormingLastDate: req.body.dewormingLastDate },
      { new: true }
    );
    if (!record) return res.status(404).json({ message: 'HealthRecord not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update dewormingIntervalWeeks
exports.updateDewormingIntervalWeeks = async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { dewormingIntervalWeeks: req.body.dewormingIntervalWeeks },
      { new: true }
    );
    if (!record) return res.status(404).json({ message: 'HealthRecord not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update weight
exports.updateWeight = async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { weight: req.body.weight },
      { new: true }
    );
    if (!record) return res.status(404).json({ message: 'HealthRecord not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
