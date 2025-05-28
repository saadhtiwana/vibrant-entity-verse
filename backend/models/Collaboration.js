
const mongoose = require('mongoose');

const collaborationSchema = new mongoose.Schema({
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  target: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['chapter-contribution', 'co-authoring', 'editing', 'beta-reading'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined', 'completed', 'cancelled'],
    default: 'pending'
  },
  message: {
    type: String,
    maxlength: 1000,
    default: ''
  },
  proposedChapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  },
  permissions: {
    canEdit: {
      type: Boolean,
      default: false
    },
    canAddChapters: {
      type: Boolean,
      default: false
    },
    canManageCharacters: {
      type: Boolean,
      default: false
    },
    canModerate: {
      type: Boolean,
      default: false
    }
  },
  deadline: {
    type: Date
  },
  completedAt: {
    type: Date
  },
  feedback: {
    type: String,
    maxlength: 1000,
    default: ''
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
}, {
  timestamps: true
});

// Indexes
collaborationSchema.index({ story: 1, status: 1 });
collaborationSchema.index({ requester: 1 });
collaborationSchema.index({ target: 1, status: 1 });

module.exports = mongoose.model('Collaboration', collaborationSchema);
