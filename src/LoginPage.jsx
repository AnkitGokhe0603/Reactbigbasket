import React from 'react';
import './auth.css';

function LoginPage({ onSignIn, onSwitch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="bottom-bar">
          <button className="signup-btn" onClick={onSwitch}>Sign Up</button>
          <a href="#" className="forgot">Forgot Your Password?</a>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google-plus-g"></i>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
