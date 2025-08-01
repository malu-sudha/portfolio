import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Email', href: 'mailto:your.email@university.edu' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
    { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=yourID' }
  ];

  return (
    <footer className="bg-teal-700 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Department Name</p>
          <p>University Name</p>
          <p>City, State ZIP</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Research', 'CV', 'Mentorship', 'News'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`} 
                  className="hover:text-teal-200 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-200 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 border-t border-teal-600 pt-4">
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
