import React from 'react';

const Research = () => {
  const researchProjects = [
    {
      title: "Research Project 1",
      description: "Detailed description of research project.",
      publications: [
        "Publication 1 in Journal Name",
        "Publication 2 in Conference"
      ]
    },
    {
      title: "Research Project 2", 
      description: "Another research project description.",
      publications: [
        "Publication 3 in Journal",
        "Publication 4 in Symposium"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 teal-bg">
      <h1 className="text-3xl font-bold teal-text mb-8">Research</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold teal-text mb-4">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div>
              <h3 className="font-semibold mb-2 teal-text">Publications:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {project.publications.map((pub, pubIndex) => (
                  <li key={pubIndex}>{pub}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
