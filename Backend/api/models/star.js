const mongoose = require('mongoose');

const starSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  mass: { type: Number, required: true },
  radius: { type: Number, required: true },
  temperature: { type: Number, required: true },
  luminosity: { type: Number, required: true },
  age: { type: Number, required: true },
  distanceFromEarth: { type: Number, required: true },
  constellation: { type: String, required: true },
  discoveredBy: { type: String, default: 'Unknown' },
  discoveryYear: { type: Number },
  notes: { type: String }
});

const Star = mongoose.model('Star', starSchema);

module.exports = Star;