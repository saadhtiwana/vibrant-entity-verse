#TESTED LOVEABLE AND IT SUCKS
# Plotify - Interactive Story Builder

Plotify is a web application for creating and managing interactive stories. Users can create accounts, write stories, manage characters, and build collaborative storytelling experiences.

## Features

- User authentication (login/register)
- Story creation and management
- Character development
- Interactive story reading
- User dashboard
- Profile management
- Responsive design

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Radix UI
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Node.js, Express, MongoDB (separate backend required)

## Getting Started with VS Code

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- VS Code editor
- Git

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd plotify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up VS Code extensions (recommended)**
   - ES7+ React/Redux/React-Native snippets
   - TypeScript Importer
   - Tailwind CSS IntelliSense
   - Auto Rename Tag
   - Bracket Pair Colorizer
   - GitLens

4. **VS Code workspace settings**
   Create `.vscode/settings.json` in your project root:
   ```json
   {
     "typescript.preferences.importModuleSpecifier": "relative",
     "editor.codeActionsOnSave": {
       "source.organizeImports": true
     },
     "editor.formatOnSave": true,
     "files.associations": {
       "*.css": "tailwindcss"
     }
   }
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open in VS Code**
   ```bash
   code .
   ```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── layout/         # Layout components (Navbar, etc.)
│   └── ui/             # Shadcn/ui components
├── contexts/           # React contexts (Auth, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Main page components
└── App.tsx             # Main application component
```

### Development Workflow

1. **Running the project**
   ```bash
   npm run dev          # Start development server
   npm run build        # Build for production
   npm run preview      # Preview production build
   ```

2. **VS Code debugging**
   - Use the built-in terminal: `Ctrl+` (backtick)
   - Set breakpoints in your code
   - Use the integrated debugger for React components

3. **Working with components**
   - Components are in `src/components/`
   - Pages are in `src/pages/`
   - Use TypeScript for type safety
   - Follow the existing naming conventions

4. **Styling**
   - Uses Tailwind CSS for styling
   - Shadcn/ui components for consistent design
   - Responsive design with mobile-first approach

### Environment Setup

Create a `.env` file in the root directory:
```
VITE_API_URL=http://localhost:5000/api
```

### Backend Setup (Required)

This frontend requires a separate backend server. The backend should provide:
- Authentication endpoints (`/api/auth/login`, `/api/auth/register`, `/api/auth/me`)
- Story management endpoints
- User management endpoints

### Common VS Code Tasks

- **Create new component**: Right-click in `src/components/` → New File
- **Import management**: Use `Ctrl+Shift+O` to organize imports
- **Find references**: `F12` or `Ctrl+Click` on any function/component
- **Rename symbol**: `F2` on any variable/function name
- **Format document**: `Shift+Alt+F`

### Troubleshooting

1. **Module not found errors**: Check import paths and ensure files exist
2. **TypeScript errors**: Check type definitions and interfaces
3. **Build errors**: Run `npm run build` to see detailed error messages
4. **Hot reload issues**: Restart the dev server with `npm run dev`

### Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For questions or support, please refer to the project documentation or create an issue in the repository.
