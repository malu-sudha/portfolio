import React from 'react';

const News = () => {
  const newsItems = [
    { 
      title: "Research Grant Awarded", 
      date: "January 2024",
      description: "Received major research funding for upcoming project."
    },
    { 
      title: "Conference Presentation", 
      date: "November 2023",
      description: "Presented key findings at International Conference."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 teal-bg">
      <h1 className="text-3xl font-bold teal-text mb-8">Recent News</h1>
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold teal-text mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-2">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
