const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  itemName: { type: String, required: true },
  itemQuantity: { type: Number, required: true },
  mobileNumber: { type: Number, required: true },
}, {
  timestamps: true,
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
