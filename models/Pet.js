const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  breed: String,
  dob: Date,
  healthStatus: String,
  vaccinationStatus: Boolean,
  feedingStatus: String,
  adoptionStatus: String,
  needVaccination: Boolean,
  transferredFood: Boolean,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: { type: String } // S3 image URL or key
  // ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
  // shelterProviderId: { type: mongoose.Schema.Types.ObjectId, ref: 'ShelterProvider' },
  // rescuerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Rescuer' },
  // vetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vet' }
});

module.exports = mongoose.model('Pet', petSchema);
