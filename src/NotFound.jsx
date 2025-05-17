import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  // Redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Page Not Found</h1>
      <p style={{ textAlign: 'center' }}>
        Oops! The page you're looking for does not exist.
        <br />
        Redirecting you to the home page...
      </p>
      <div style={{ textAlign: 'center' }}>
        <img
          src="/Images/oops-404-error.png"
          alt="404 Error"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </>
  );
}

export default NotFound;
