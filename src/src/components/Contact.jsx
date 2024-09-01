import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '50px 20px', background: '#f7f7f7', textAlign: 'center', position: 'relative' }}>
      <img 
        src="https://www.lifeisnerd.it/wp-content/uploads/2020/08/naruto-shippuden-e-boruto-1200x630-1.jpg" 
        alt="Contact Background" 
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
      <h2>Холбоо барих</h2>
      <p>Танд асуулт байвал бидэнтэй холбогдоорой!</p>
      <button style={{ padding: '10px 20px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Холбоо барих
      </button>
    </section>
  );
}

export default Contact;