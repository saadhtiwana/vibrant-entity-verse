
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50
  },
  description: {
    type: String,
    maxlength: 500,
    default: ''
  },
  color: {
    type: String,
    default: '#6B7280'
  },
  icon: {
    type: String,
    default: ''
  },
  storiesCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  parentGenre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  },
  tags: [{
    type: String,
    trim: true
  }],
  popularityScore: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Indexes
genreSchema.index({ name: 1 });
genreSchema.index({ popularityScore: -1 });
genreSchema.index({ parentGenre: 1 });

module.exports = mongoose.model('Genre', genreSchema);
