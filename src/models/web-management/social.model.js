const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema(
  {
    socialName: {
      type: String,
      required: [true, 'Social name is required'],
      trim: true,
    },
    socialLink: {
      type: String,
      required: [true, 'Social link is required'],
      trim: true,
    },
    socialIcon: {
      type: String,
      required: [true, 'Icon is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Social', socialSchema);
