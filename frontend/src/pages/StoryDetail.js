
import React from 'react';
import { useParams } from 'react-router-dom';

const StoryDetail = () => {
  const { id } = useParams();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Story Detail</h1>
      <div className="card">
        <div className="card-body text-center">
          <p className="text-gray-600">Story detail page for ID: {id}</p>
          <p className="text-sm text-gray-500 mt-2">
            This will show the story details, chapters, and reading interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
