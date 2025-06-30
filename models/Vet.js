const mongoose = require('mongoose');

const vetSchema = new mongoose.Schema({
  name: String,
  type: String,
  phone: String,
  dob: Date,
  healthStatus: String,
  vaccinationStatus: String,
  feedingStatus: String,
  adoptionStatus: String,
  needVaccination: Boolean,
  transferredFood: Boolean
});

module.exports = mongoose.model('Vet', vetSchema);
