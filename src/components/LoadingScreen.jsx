import React from 'react';
import './css/LoadingScreen.css';

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-screen">
      <h1 className="welcome-text">Welcome to Ignasi's Portfolio</h1>
      <p className="loading-message">We are loading the resources</p>
      <div className="loading-bar-container">
        <div 
          className="loading-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="loading-percentage">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default LoadingScreen;