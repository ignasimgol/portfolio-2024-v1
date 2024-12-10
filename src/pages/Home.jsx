import React from 'react';
import Card from '../components/Card'; 
import './css/Home.css';

const Home = () => {
  return (
    <div className="container">
      
      {/* Apartado de Works */}
      <section className="works-section">
        <h2>Works</h2>
        <div className="works-cards-container">
          <Card 
            imageUrl="https://utfs.io/f/DM7CcnrlhW9Zk37yfrs5cpAJ8UsG0IKWxZtiXDYzb9yBlEMm" 
            title="📚 ballbylon" 
            subtitle="Descripción del trabajo 1"
            linkUrl="/ballbylon"
          />
          <Card 
            imageUrl="https://utfs.io/f/DM7CcnrlhW9ZxnEmba5GhpvSgs5yaJmncdDLYZ2wQF6UiqNo" 
            title="📷 Photo Portfolio" 
            subtitle="Three.js based photo portfolio"
            linkUrl="/foto-portfolio"
          />
          <Card 
            imageUrl="https://utfs.io/f/DM7CcnrlhW9ZxnEmba5GhpvSgs5yaJmncdDLYZ2wQF6UiqNo" 
            title="Work 3" 
            subtitle="Descripción del trabajo 3"
            linkUrl="/ballbylon"
          />
          <Card 
            imageUrl="https://utfs.io/f/DM7CcnrlhW9ZxnEmba5GhpvSgs5yaJmncdDLYZ2wQF6UiqNo" 
            title="Work 4" 
            subtitle="Descripción del trabajo 4"
            linkUrl="/ballbylon"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

