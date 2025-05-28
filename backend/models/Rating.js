
const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    maxlength: 1000,
    default: ''
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  aspects: {
    plot: {
      type: Number,
      min: 1,
      max: 5
    },
    characters: {
      type: Number,
      min: 1,
      max: 5
    },
    writing: {
      type: Number,
      min: 1,
      max: 5
    },
    pacing: {
      type: Number,
      min: 1,
      max: 5
    }
  },
  isRecommended: {
    type: Boolean,
    default: false
  },
  helpfulVotes: {
    type: Number,
    default: 0
  },
  isVerifiedReader: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Ensure one rating per user per story
ratingSchema.index({ user: 1, story: 1 }, { unique: true });
ratingSchema.index({ story: 1, rating: -1 });

module.exports = mongoose.model('Rating', ratingSchema);
