import React, { useState } from 'react';
import './AuthSlider.css';

function AuthSlider() {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLoginActive(!isLoginActive);

  return (
    <>
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="auth-form">
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form>
            <input type="text" placeholder="Username" />
            {!isLogin && <input type="email" placeholder="Email" />}
            <input type="password" placeholder="Password" />
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>

        <div className="auth-side">
          <h1>WELCOME {isLogin ? 'BACK!' : 'ABOARD!'}</h1>
          
        </div>
      </div>
    </div>
    
    </>
  );
}

export default AuthSlider;
