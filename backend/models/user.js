const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  company: { type: String, required: true },
  country: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);