import React from 'react';
import './css/LoadingScreen.css';

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-screen">
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