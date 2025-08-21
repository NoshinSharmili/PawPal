const mongoose = require('mongoose');

const adoptionApplicationSchema = new mongoose.Schema({
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  fullName: { type: String, required: true },
  profession: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  isHousePetProofed: { type: Boolean, required: true },
  familyInformation: { type: String, required: true },
  nidNumber: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  reasonToAdopt: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AdoptionApplication', adoptionApplicationSchema); 