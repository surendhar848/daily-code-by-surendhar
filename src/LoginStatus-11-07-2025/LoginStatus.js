import React, { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');

  const handleLogin = () => {
    if (inputName.trim() !== '') {
      setName(inputName);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
    setInputName('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in.</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={handleLogin} style={{ marginLeft: '10px' }}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default LoginStatus;
