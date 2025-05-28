
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {user?.displayName}!</h1>
        <p className="text-gray-600 mt-2">Manage your stories and track your progress</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">My Stories</h3>
            <p className="text-gray-600">View and manage your stories</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Collaborations</h3>
            <p className="text-gray-600">Work with other writers</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">Track your story performance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
