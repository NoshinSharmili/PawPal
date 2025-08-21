const mongoose = require('mongoose');

const fosterSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  experience: { type: String, required: true },
  preferredPets: [{ type: String }], // Array of pet types like 'Dogs', 'Cats', etc.
  maxPets: { type: Number, required: true },
  homeType: { type: String, required: true, enum: ['House', 'Apartment', 'Condo', 'Townhouse'] },
  hasYard: { type: Boolean, default: false },
  hasOtherPets: { type: Boolean, default: false },
  otherPetsDetails: { type: String },
  availability: { 
    type: String, 
    required: true, 
    enum: ['Full Time', 'Part Time', 'Weekends Only', 'Emergency Only'] 
  },
  emergencyContact: { type: String, required: true },
  emergencyPhone: { type: String, required: true },
  specialRequirements: { type: String },
  availabilityStatus: { 
    type: String, 
    enum: ['available', 'unavailable'], 
    default: 'unavailable' 
  },
  petsCurrentlyFostering: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }],
  totalPetsFostered: { type: Number, default: 0 },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  reviews: [{
    reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reviewerName: { type: String },
    comment: { type: String },
    rating: { type: Number, min: 0, max: 5 },
    date: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt field before saving
fosterSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Foster', fosterSchema);