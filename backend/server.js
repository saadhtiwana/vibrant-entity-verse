
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/stories', require('./routes/stories'));
app.use('/api/chapters', require('./routes/chapters'));
app.use('/api/characters', require('./routes/characters'));
app.use('/api/choices', require('./routes/choices'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/ratings', require('./routes/ratings'));
app.use('/api/genres', require('./routes/genres'));
app.use('/api/collections', require('./routes/collections'));
app.use('/api/collaborations', require('./routes/collaborations'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/story-builder')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Interactive Story Builder API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
