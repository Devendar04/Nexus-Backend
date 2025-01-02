const mongoose = require('mongoose');

// Define schema for Bin
const binSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  wasteTypes: [
    {
      name: { type: String, required: true },
      value: { type: Number, required: true }
    }
  ],
  lastEmptied: {
    type: Date,
    required: true
  },
  batteryLevel: {
    type: Number,
    required: true
  },
  fillLevel: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  alerts: [
    {
      type: String
    }
  ]
});

// Bin model
const Bin = mongoose.model('Bin', binSchema);

module.exports = Bin;
