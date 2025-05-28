
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      
      <div className="max-w-2xl">
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold">User Information</h2>
          </div>
          <div className="card-body">
            <div className="grid gap-4">
              <div>
                <label className="form-label">Username</label>
                <p className="text-gray-700">{user?.username}</p>
              </div>
              <div>
                <label className="form-label">Display Name</label>
                <p className="text-gray-700">{user?.displayName}</p>
              </div>
              <div>
                <label className="form-label">Email</label>
                <p className="text-gray-700">{user?.email}</p>
              </div>
              <div>
                <label className="form-label">Role</label>
                <p className="text-gray-700 capitalize">{user?.role}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
