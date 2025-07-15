// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['pet_owner', 'adopter', 'shelter_provider', 'veterinarian', 'rescuer'],
    required: true 
  },
  phone: String,
  address: String,
  isVerified: { type: Boolean, default: false },
  profilePicture: String,
  createdAt: { type: Date, default: Date.now }
});
