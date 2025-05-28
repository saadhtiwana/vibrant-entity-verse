
import React from 'react';
import { useParams } from 'react-router-dom';

const StoryDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Story Detail</h1>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-8 text-center">
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
