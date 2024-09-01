import React, { useState } from 'react';

function EmailValidationAndDownload() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => {
    // Email формат шалгах энгийн regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    setIsEmailValid(false);
  };

  const handleDownloadClick = () => {
    if (validateEmail(email)) {
      setIsEmailValid(true);
      // PDF файлыг татаж авах линкийг энд оруулна
      const link = document.createElement('a');
      link.href = '/path-to-your-pdf-file.pdf'; // PDF файлын замыг энд оруулна
      link.download = 'presentation.pdf'; // Татах файлын нэрийг энд оруулна
      link.click();
    } else {
      setError('Имэйл хаяг буруу байна. Та дахин шалгана уу.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Танилцуулга татах</h2>
      <input
        type="email"
        placeholder="Имэйл хаяг оруулна уу"
        value={email}
        onChange={handleEmailChange}
        style={{ padding: '10px', width: '300px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        onClick={handleDownloadClick}
        style={{
          padding: '10px 20px',
          backgroundColor: 'rgb(51, 51, 51)',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Танилцуулга татах
      </button>
    </div>
  );
}

export default EmailValidationAndDownload;