const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema(
  {
    phone: { type: String, required: [true, 'Phone is required'], default: '0 555 555 55 55' },
    email: { type: String, required: [true, 'Email is required'], default: 'fake@example.com' },
    address: { type: String, required: [true, 'Address is required'], default: 'Address' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ContactSetting', settingSchema);
