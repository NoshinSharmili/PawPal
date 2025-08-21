const mongoose = require('mongoose');

const vetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  services: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
  latitude: { type: Number },
  longitude: { type: Number },
  reviews: [{
    reviewer: { type: String },
    comment: { type: String },
    rating: { type: Number, min: 0, max: 5 },
    date: { type: Date, default: Date.now }
  }],
  availability: {
    monday: { type: String },
    tuesday: { type: String },
    wednesday: { type: String },
    thursday: { type: String },
    friday: { type: String },
    saturday: { type: String },
    sunday: { type: String }
  },
  phone: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model('Vet', vetSchema);
