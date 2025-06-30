const mongoose = require('mongoose');

const adoptionStatusEnum = ['pending', 'approved', 'rejected'];

const adopterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  petsAvailable: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }],
  trackAdoptionStatus: [
    {
      petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
      status: { type: String, enum: adoptionStatusEnum, default: 'pending' }
    }
  ]
});

module.exports = mongoose.model('Adopter', adopterSchema);
