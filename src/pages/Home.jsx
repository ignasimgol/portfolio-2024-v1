import React from 'react';
import Card from '../components/Card'; 
import './css/Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Título de la página</h1>
      <p>Este es el contenido de tu página con márgenes pronunciados a los lados.</p>
      
      {/* Apartado de Works */}
      <section className="works-section">
        <h2>Works</h2>
        <div className="works-cards-container">
          
          <Card 
            imageUrl="https://via.placeholder.com/300" 
            title="📚 ballbylon" 
            subtitle="Descripción del trabajo 1"
          />
          <Card 
            imageUrl="https://via.placeholder.com/300" 
            title="Work 2" 
            subtitle="Descripción del trabajo 2"
          />
          <Card 
            imageUrl="https://via.placeholder.com/300" 
            title="Work 3" 
            subtitle="Descripción del trabajo 3"
          />
          <Card 
            imageUrl="https://via.placeholder.com/300" 
            title="Work 4" 
            subtitle="Descripción del trabajo 4"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

