// components/Card.jsx
import React from 'react';
import './css/Card.css'; // Importa los estilos específicos del Card

const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
