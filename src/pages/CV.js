import React from 'react';

const CV = () => {
  return (
    <div className="container mx-auto px-4 py-16 teal-bg">
      <h1 className="text-3xl font-bold teal-text mb-8">Curriculum Vitae</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <a 
          href="/documents/cv.pdf" 
          download 
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
        >
          Download Full CV
        </a>
      </div>
    </div>
  );
};

export default CV;
