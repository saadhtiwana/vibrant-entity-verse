
# Interactive Story Builder - Frontend

This is the frontend application for the Interactive Story Builder, built with React and modern web technologies.

## Features

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for SPA experience
- **React Query**: Efficient data fetching and caching
- **Authentication**: JWT-based auth with context management
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Clean, accessible interface with Lucide icons
- **Form Handling**: React Hook Form for efficient form management
- **Notifications**: Toast notifications for user feedback

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

4. Update the `.env` file with your API URL:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_APP_NAME=Interactive Story Builder
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
frontend/
├── public/           # Static files
├── src/
│   ├── components/   # Reusable components
│   │   ├── auth/     # Authentication components
│   │   └── layout/   # Layout components (Navbar, etc.)
│   ├── contexts/     # React contexts (Auth)
│   ├── pages/        # Page components
│   ├── App.js        # Main App component
│   ├── index.js      # App entry point
│   └── index.css     # Global styles
├── .env.example      # Environment variables template
└── package.json      # Dependencies and scripts
```

## Pages

- **Home** - Landing page with features and CTA
- **Login** - User authentication
- **Register** - User registration
- **Stories** - Browse all stories (placeholder)
- **Story Detail** - Individual story view (placeholder)
- **Create Story** - Story creation form (placeholder)
- **Dashboard** - User dashboard (placeholder)
- **Profile** - User profile management (placeholder)

## Components

### Layout
- **Navbar** - Responsive navigation with user menu
- **PrivateRoute** - Protected route wrapper

### Authentication
- **Login Form** - Email/password login
- **Register Form** - User registration with validation

## Authentication Flow

1. Users can register with username, email, display name, and password
2. Login returns JWT token stored in localStorage
3. AuthContext manages user state across the app
4. PrivateRoute protects authenticated pages
5. Axios interceptor adds token to API requests

## Styling

The application uses a custom CSS utility system inspired by Tailwind CSS:

- **Layout utilities** - Grid, flexbox, spacing
- **Component classes** - Buttons, cards, forms
- **Responsive design** - Mobile-first breakpoints
- **Color system** - Consistent color palette
- **Typography** - Font sizes and weights

## State Management

- **Auth Context** - User authentication state
- **React Query** - Server state and caching
- **Local State** - Component-level state with useState

## API Integration

- **Axios** - HTTP client with interceptors
- **Base URL** - Configurable via environment variables
- **Error Handling** - Toast notifications for API errors
- **Token Management** - Automatic token attachment

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style

- Functional components with hooks
- ES6+ JavaScript features
- Consistent naming conventions
- Component composition patterns

## Next Steps

1. Implement story browsing and creation functionality
2. Add real-time features for collaborative writing
3. Implement story reading interface with choices
4. Add character and chapter management
5. Create rating and comment systems
6. Add user profile customization
7. Implement responsive design improvements
8. Add dark mode support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Production Build

To create a production build:

```bash
npm run build
```

The build folder will contain optimized static files ready for deployment.
