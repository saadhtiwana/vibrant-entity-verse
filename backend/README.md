
# Interactive Story Builder - Backend

This is the backend API for the Interactive Story Builder application, built with Node.js, Express, and MongoDB.

## Features

- **Authentication & Authorization**: JWT-based auth with bcrypt password hashing
- **10 Core Entities**: Users, Stories, Chapters, Characters, Choices, Comments, Ratings, Genres, Collections, Collaborations
- **RESTful API**: Well-structured routes with proper HTTP methods
- **Data Validation**: Express-validator for input validation
- **Error Handling**: Comprehensive error handling middleware
- **Database**: MongoDB with Mongoose ODM

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   - MongoDB connection string
   - JWT secret
   - Cloudinary credentials (optional)

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
backend/
├── models/           # MongoDB models (10 entities)
├── controllers/      # Route handlers and business logic
├── routes/          # Express route definitions
├── middleware/      # Custom middleware (auth, validation)
├── .env.example     # Environment variables template
├── server.js        # Main application file
└── package.json     # Dependencies and scripts
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Stories
- `GET /api/stories` - Get all public stories
- `GET /api/stories/:id` - Get story by ID
- `POST /api/stories` - Create new story (protected)
- `PUT /api/stories/:id` - Update story (protected)
- `DELETE /api/stories/:id` - Delete story (protected)
- `GET /api/stories/user/me` - Get user's stories (protected)

### Other Entities
- Routes for chapters, characters, choices, comments, ratings, genres, collections, and collaborations are defined but need implementation.

## Database Models

### Core Entities:
1. **Users** - User accounts and profiles
2. **Stories** - Main story entities with metadata
3. **Chapters** - Individual story chapters with branching
4. **Characters** - Character profiles and relationships
5. **Choices** - Interactive story choices
6. **Comments** - Reader feedback and discussions
7. **Ratings** - Story ratings and reviews
8. **Genres** - Story categorization
9. **Collections** - Curated story lists
10. **Collaborations** - Writer collaboration requests

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/story-builder
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:3000
```

## Usage

1. Start MongoDB on your system
2. Run `npm run dev` to start the development server
3. The API will be available at `http://localhost:5000`
4. Use the frontend application or API testing tools to interact with the endpoints

## Next Steps

1. Implement remaining controllers and routes for all entities
2. Add file upload functionality with Cloudinary
3. Implement real-time features with Socket.io
4. Add comprehensive error handling and logging
5. Set up automated testing
6. Deploy to production environment
