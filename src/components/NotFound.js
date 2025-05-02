import React from 'react';
import './NotFound.css'; // Make sure this path matches your folder structure

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h2>404 - Page Not Found</h2>
        <p>The page you’re looking for doesn’t seem to exist.</p>
        <a href="/" className="notfound-button">Back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;