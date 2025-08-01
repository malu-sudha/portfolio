import React from 'react';

const Layout = ({ children }) => {
  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('assets/images/background.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    zIndex: -2,
  };

  const backgroundOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Overlay effect
    zIndex: -1,
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={backgroundStyle}></div>
      <div style={backgroundOverlayStyle}></div>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Layout;

