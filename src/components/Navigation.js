import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'research', label: 'Research' },
    { key: 'cv', label: 'CV' },
    { key: 'mentorship', label: 'Mentorship' },
    { key: 'news', label: 'News' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-600">Academic Portfolio</div>
        <div className="space-x-4">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`px-3 py-2 rounded transition ${
                currentPage === item.key 
                  ? 'bg-teal-600 text-white' 
                  : 'text-teal-700 hover:bg-teal-100'
              }`}
              onClick={() => setCurrentPage(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
