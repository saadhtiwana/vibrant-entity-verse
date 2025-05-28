
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 1000,
    default: ''
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  avatar: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    enum: ['protagonist', 'antagonist', 'supporting', 'minor'],
    default: 'supporting'
  },
  traits: [{
    type: String,
    trim: true
  }],
  age: {
    type: Number,
    min: 0,
    max: 1000
  },
  occupation: {
    type: String,
    trim: true,
    maxlength: 100
  },
  personality: {
    type: String,
    maxlength: 500,
    default: ''
  },
  backstory: {
    type: String,
    maxlength: 1000,
    default: ''
  },
  relationships: [{
    character: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Character'
    },
    relationship: {
      type: String,
      trim: true
    }
  }],
  firstAppearance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  },
  isAlive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes
characterSchema.index({ story: 1 });
characterSchema.index({ createdBy: 1 });
characterSchema.index({ role: 1 });

module.exports = mongoose.model('Character', characterSchema);
