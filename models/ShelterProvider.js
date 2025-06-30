const mongoose = require('mongoose');

const shelterProviderSchema = new mongoose.Schema({
  name: String,
  location: String,
  contactInfo: String,
  capacity: Number,
  vacancy: Boolean,
  petsAvailable: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
});

module.exports = mongoose.model('ShelterProvider', shelterProviderSchema);
