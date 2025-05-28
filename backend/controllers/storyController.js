
const Story = require('../models/Story');
const Chapter = require('../models/Chapter');
const { validationResult } = require('express-validator');

// Get all stories
exports.getAllStories = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const filter = { isPublic: true, status: 'published' };
    
    // Add genre filter if provided
    if (req.query.genre) {
      filter.genre = req.query.genre;
    }
    
    // Add search filter if provided
    if (req.query.search) {
      filter.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const stories = await Story.find(filter)
      .populate('author', 'username displayName avatar')
      .populate('genre', 'name color')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Story.countDocuments(filter);

    res.json({
      stories,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get all stories error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get story by ID
exports.getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id)
      .populate('author', 'username displayName avatar bio')
      .populate('genre', 'name color description')
      .populate('collaborators.user', 'username displayName avatar');

    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    // Increment view count
    story.viewsCount += 1;
    await story.save();

    res.json({ story });
  } catch (error) {
    console.error('Get story error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new story
exports.createStory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      description,
      genre,
      tags,
      isInteractive,
      allowCollaboration,
      isPublic
    } = req.body;

    const story = new Story({
      title,
      description,
      author: req.userId,
      genre,
      tags: tags || [],
      isInteractive: isInteractive !== undefined ? isInteractive : true,
      allowCollaboration: allowCollaboration || false,
      isPublic: isPublic !== undefined ? isPublic : true
    });

    await story.save();
    await story.populate('author', 'username displayName avatar');
    await story.populate('genre', 'name color');

    res.status(201).json({
      message: 'Story created successfully',
      story
    });
  } catch (error) {
    console.error('Create story error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update story
exports.updateStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    // Check if user is author or collaborator with edit permission
    if (story.author.toString() !== req.userId) {
      const collaborator = story.collaborators.find(
        c => c.user.toString() === req.userId
      );
      if (!collaborator || collaborator.role !== 'co-author') {
        return res.status(403).json({ message: 'Not authorized to update this story' });
      }
    }

    const updates = req.body;
    Object.keys(updates).forEach(key => {
      if (updates[key] !== undefined) {
        story[key] = updates[key];
      }
    });

    await story.save();
    await story.populate('author', 'username displayName avatar');
    await story.populate('genre', 'name color');

    res.json({
      message: 'Story updated successfully',
      story
    });
  } catch (error) {
    console.error('Update story error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete story
exports.deleteStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    // Only author can delete
    if (story.author.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this story' });
    }

    // Delete all related chapters
    await Chapter.deleteMany({ story: story._id });
    
    await Story.findByIdAndDelete(req.params.id);

    res.json({ message: 'Story deleted successfully' });
  } catch (error) {
    console.error('Delete story error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user's stories
exports.getUserStories = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const stories = await Story.find({ author: req.userId })
      .populate('genre', 'name color')
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Story.countDocuments({ author: req.userId });

    res.json({
      stories,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get user stories error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
