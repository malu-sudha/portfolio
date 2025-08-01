import React from 'react';

const Mentorship = () => {
  const mentees = [
    { name: "Student Name 1", program: "PhD Candidate", year: "2022-Present" },
    { name: "Student Name 2", program: "Masters Student", year: "2021-2023" }
  ];

  return (
    <div className="container mx-auto px-4 py-16 teal-bg">
      <h1 className="text-3xl font-bold teal-text mb-8">Student Mentorship</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {mentees.map((mentee, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold teal-text mb-2">
              {mentee.name}
            </h2>
            <p className="text-gray-700">{mentee.program}</p>
            <p className="text-gray-600">{mentee.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentorship;
