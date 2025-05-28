
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Book, Menu, X, User, LogOut, Plus, Home, Library } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Book className="w-6 h-6" />
            Story Builder
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link to="/stories" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Library className="w-4 h-4" />
              Stories
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/create-story" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
                  <Plus className="w-4 h-4" />
                  Create
                </Link>
                
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                  >
                    <User className="w-4 h-4" />
                    {user?.displayName || user?.username}
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link
                to="/stories"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                <Library className="w-4 h-4" />
                Stories
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/create-story"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <Plus className="w-4 h-4" />
                    Create Story
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-blue-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-blue-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 text-left text-gray-700 hover:text-blue-600 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-blue-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-primary w-fit"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay for user menu */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setShowUserMenu(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
