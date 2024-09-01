import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', background: '#333', color: '#fff', position: 'relative' }}>
      <img 
        src="https://www.lifeisnerd.it/wp-content/uploads/2020/08/naruto-shippuden-e-boruto-1200x630-1.jpg" 
        alt="Footer Background" 
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: -1, 
          objectFit: 'cover',
          filter: 'brightness(50%)'
        }}
      />
      <p>© 2024 Барилгын Компани. Бүх эрх хуулиар хамгаалагдсан.</p>
    </footer>
  );
}

export default Footer;