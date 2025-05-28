
const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 500,
    default: ''
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  stories: [{
    story: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Story'
    },
    addedAt: {
      type: Date,
      default: Date.now
    },
    order: {
      type: Number,
      default: 0
    }
  }],
  coverImage: {
    type: String,
    default: ''
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  isOfficial: {
    type: Boolean,
    default: false
  },
  followersCount: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true
  }],
  type: {
    type: String,
    enum: ['reading-list', 'favorites', 'recommendation', 'series'],
    default: 'reading-list'
  },
  collaborators: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['editor', 'contributor'],
      default: 'contributor'
    }
  }]
}, {
  timestamps: true
});

// Indexes
collectionSchema.index({ creator: 1 });
collectionSchema.index({ isPublic: 1, followersCount: -1 });
collectionSchema.index({ type: 1 });

module.exports = mongoose.model('Collection', collectionSchema);
