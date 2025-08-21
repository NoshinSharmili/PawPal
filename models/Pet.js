const mongoose = require('mongoose');
const HealthRecord = require('./HealthRecord');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  breed: String,
  dob: Date,
  healthStatus: String,
  vaccinationStatus: Boolean,
  feedingStatus: String,
  adoptionStatus: { type: String, enum: ['personal', 'up for adoption'] },
  needVaccination: Boolean,
  transferredFood: Boolean,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: { type: String } // S3 image URL or key
  // ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
  // shelterProviderId: { type: mongoose.Schema.Types.ObjectId, ref: 'ShelterProvider' },
  // rescuerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Rescuer' },
  // vetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vet' }
<<<<<<< HEAD
});

petSchema.post('save', async function(doc, next) {
  try {
    // Only create if this is a new document
    if (doc.isNew) {
      await HealthRecord.create({ petId: doc._id });
    }
    next();
  } catch (err) {
    next(err);
  }
=======
>>>>>>> e1201dbb78164aa3549184cd08020bd0332f1f98
});

module.exports = mongoose.model('Pet', petSchema);
