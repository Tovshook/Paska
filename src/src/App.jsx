import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmailValidationAndDownload from './components/EmailValidationAndDownload';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <EmailValidationAndDownload/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;