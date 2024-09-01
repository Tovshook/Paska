import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function Hero() {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.div style={{ ...fade, padding: '100px 20px', textAlign: 'center', position: 'relative', color: '#fff' }}>
      <img 
        src="https://www.lifeisnerd.it/wp-content/uploads/2020/08/naruto-shippuden-e-boruto-1200x630-1.jpg" 
        alt="Hero Background" 
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
      <h2>Бидний Хийсэн Ажлууд</h2>
      <p>Шилдэг чанартай барилга угсралтын шийдлүүдийг санал болгож байна</p>
    </animated.div>
  );
}

export default Hero;