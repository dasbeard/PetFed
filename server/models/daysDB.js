// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');


// =========================================================================
// ============================== Schemas ==================================
// =========================================================================
var DaysSchema = new mongoose.Schema({
  fedCatStatus: {type: Boolean, required: true},
  fedCatTime: {type: String, required: true},
  fedDogStatus: {type: Boolean, required: true},
  fedDogTime: {type: String, required: true},
  walkedDogStatus: {type: Boolean, required: true},
  walkedDogTime: {type: String, required: true},
  date: {type:String, required: true},

}, {timestamps: true});

// =========================================================================
// ========================== Set Schema Name===============================
// =========================================================================

mongoose.model('Days', DaysSchema);
