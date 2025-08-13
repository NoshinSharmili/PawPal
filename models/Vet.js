const mongoose = require('mongoose');

const vetSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  clinicName: { 
    type: String, 
    required: true 
  },
  specialization: {
    type: String,
    enum: ['General Practice', 'Surgery', 'Dermatology', 'Cardiology', 'Orthopedics', 'Emergency Care', 'Exotic Animals', 'Other'],
    default: 'General Practice'
  },
  phone: { 
    type: String, 
    required: true 
  },
  email: {
    type: String,
    required: true
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, default: 'Bangladesh' }
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
      index: '2dsphere' // Enable geospatial queries
    }
  },
  availability: {
    hours: {
      monday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
      tuesday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
      wednesday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
      thursday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
      friday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
      saturday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
      sunday: { open: String, close: String, isOpen: { type: Boolean, default: false } }
    },
    emergencyService: { type: Boolean, default: false }
  },
  services: [{
    type: String,
    enum: ['Vaccination', 'Surgery', 'Dental Care', 'Grooming', 'Emergency Care', 'Health Checkup', 'X-Ray', 'Laboratory Tests', 'Microchipping', 'Spay/Neuter']
  }],
  rating: {
    average: { type: Number, default: 0, min: 0, max: 5 },
    totalReviews: { type: Number, default: 0 }
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true
  },
  experienceYears: {
    type: Number,
    required: true,
    min: 0
  },
  profilePicture: String,
  isActive: { 
    type: Boolean, 
    default: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Create 2dsphere index for geospatial queries
vetSchema.index({ location: '2dsphere' });

// Update the updatedAt field before saving
vetSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Method to calculate distance from a point (in kilometers)
vetSchema.methods.getDistanceFrom = function(longitude, latitude) {
  const earthRadius = 6371; // Earth's radius in kilometers
  const lat1 = this.location.coordinates[1] * Math.PI / 180;
  const lat2 = latitude * Math.PI / 180;
  const deltaLat = (latitude - this.location.coordinates[1]) * Math.PI / 180;
  const deltaLng = (longitude - this.location.coordinates[0]) * Math.PI / 180;

  const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
          Math.cos(lat1) * Math.cos(lat2) *
          Math.sin(deltaLng/2) * Math.sin(deltaLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return earthRadius * c;
};

module.exports = mongoose.model('Vet', vetSchema);