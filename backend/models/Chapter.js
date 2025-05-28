
const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  chapterNumber: {
    type: Number,
    required: true
  },
  wordCount: {
    type: Number,
    default: 0
  },
  readTime: {
    type: Number, // in minutes
    default: 0
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  isCliffhanger: {
    type: Boolean,
    default: false
  },
  parentChapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    default: null
  },
  branchFromChoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Choice',
    default: null
  },
  viewsCount: {
    type: Number,
    default: 0
  },
  likesCount: {
    type: Number,
    default: 0
  },
  commentsCount: {
    type: Number,
    default: 0
  },
  notes: {
    type: String,
    maxlength: 500,
    default: ''
  }
}, {
  timestamps: true
});

// Indexes
chapterSchema.index({ story: 1, chapterNumber: 1 });
chapterSchema.index({ author: 1 });
chapterSchema.index({ status: 1 });

module.exports = mongoose.model('Chapter', chapterSchema);
