import React from 'react';
import { Link } from 'react-router-dom';
import './css/Card.css'; // Importa los estilos específicos del Card

const Card = ({ imageUrl, title, subtitle, linkUrl }) => {
  return (
    <Link to={linkUrl} className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </Link>
  );
};

export default Card;
