const mongoose = require('mongoose');

const VaccineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastGivenDate: { type: Date, required: true },
  due: { type: Date, required: true }
});

const HealthRecordSchema = new mongoose.Schema({
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  lastVetVisit: { type: Date },
  vetVisitIntervalWeeks: { type: Number },
  vaccines: [VaccineSchema],
  dewormingLastDate: { type: Date },
  dewormingIntervalWeeks: { type: Number },
  weight: { type: Number }
});

module.exports = mongoose.model('HealthRecord', HealthRecordSchema);
