import React from 'react';
import './auth.css';

function SignUpPage({ onSignIn, onSwitch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
        <p>New user? < a href = "/signup">sign up</a></p>
        <div className="bottom-bar">
          <button className="signup-btn" onClick={onSwitch}>Back to Login</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
