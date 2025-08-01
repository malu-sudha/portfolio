import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16 teal-bg">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold teal-text mb-4">
            Dr. Your Name
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">
            Research Field / Department
          </h2>
          <p className="text-gray-700 mb-8">
            Professional bio highlighting research interests and academic focus.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="/api/placeholder/400/400" 
            alt="Professional Headshot" 
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
