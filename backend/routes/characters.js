
const express = require('express');
const router = express.Router();

// Placeholder routes for characters
router.get('/', (req, res) => {
  res.json({ message: 'Characters routes - to be implemented' });
});

module.exports = router;
