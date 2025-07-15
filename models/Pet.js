const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // dog, cat, bird, etc.
  breed: String,
  age: Number,
  gender: { type: String, enum: ['male', 'female'] },
  size: { type: String, enum: ['small', 'medium', 'large'] },
  color: String,
  description: String,
  images: [String],
  

  healthStatus: { type: String, default: 'healthy' },
  vaccinationStatus: { type: Boolean, default: false },
  lastVaccinationDate: Date,
  nextVaccinationDate: Date,
  medicalNotes: String,
 feedingSchedule: [{
    time: String,
    food: String,
    amount: String
  }],
  careNotes: String,
  activityLevel: { type: String, enum: ['low', 'medium', 'high'] },
