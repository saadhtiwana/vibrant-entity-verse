
const express = require('express');
const { body } = require('express-validator');
const storyController = require('../controllers/storyController');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all stories (public)
router.get('/', storyController.getAllStories);

// Get story by ID (public)
router.get('/:id', storyController.getStoryById);

// Create new story (protected)
router.post('/', auth, [
  body('title')
    .trim()
    .notEmpty()
    .isLength({ max: 200 })
    .withMessage('Title is required and must be less than 200 characters'),
  body('description')
    .trim()
    .notEmpty()
    .isLength({ max: 1000 })
    .withMessage('Description is required and must be less than 1000 characters'),
  body('genre')
    .notEmpty()
    .withMessage('Genre is required')
], storyController.createStory);

// Update story (protected)
router.put('/:id', auth, storyController.updateStory);

// Delete story (protected)
router.delete('/:id', auth, storyController.deleteStory);

// Get user's stories (protected)
router.get('/user/me', auth, storyController.getUserStories);

module.exports = router;
