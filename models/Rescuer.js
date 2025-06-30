const mongoose = require('mongoose');

const rescuerSchema = new mongoose.Schema({
  name: String,
  contactInfo: String,
  petsRescued: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
});

module.exports = mongoose.model('Rescuer', rescuerSchema);
