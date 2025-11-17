const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema(
  {
    socialName: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    socialLink: {
      type: String,
      required: [true, 'Content is required'],
      trim: true,
    },
    socialIcon: {
      type: String,
      required: [true, 'Icon is required'],
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Social', socialSchema);
