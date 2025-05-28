
const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    required: true
  },
  nextChapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  },
  order: {
    type: Number,
    required: true,
    min: 1
  },
  consequences: {
    type: String,
    maxlength: 500,
    default: ''
  },
  isDefault: {
    type: Boolean,
    default: false
  },
  votesCount: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  requiresCondition: {
    type: Boolean,
    default: false
  },
  condition: {
    type: String,
    maxlength: 200,
    default: ''
  }
}, {
  timestamps: true
});

// Indexes
choiceSchema.index({ chapter: 1, order: 1 });
choiceSchema.index({ nextChapter: 1 });
choiceSchema.index({ createdBy: 1 });

module.exports = mongoose.model('Choice', choiceSchema);
