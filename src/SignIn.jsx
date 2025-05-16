import React from 'react';
import './auth.css';

function SignIn({ onLogout }) {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back!</h2>
        <p>You are now signed in.</p>
        <button className="login-btn" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default SignIn;
