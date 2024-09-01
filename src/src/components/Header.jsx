import React from 'react';

function Header() {
  return (
    <header style={{ padding: '20px', textAlign: 'center', background: '#333', color: '#fff' }}>
      <h1>Барилгын Компани</h1>
      <nav>
        <a href="#services" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Үйлчилгээ</a>
        <a href="#contact" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Холбоо барих</a>
      </nav>
    </header>
  );
}

export default Header;