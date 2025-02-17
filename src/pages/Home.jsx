import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './css/Home.css';

const Home = () => {
  return (
    <div className="container">
      <section className="works-section">
        <h2>Works</h2>
        <div className="works-cards-container">
          <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZlrfyUMHVBGdgrfMQsJvh6T85uayOKj9zFNYU" 
            title="📚 ballbylon" 
            subtitle="La biblioteca del baloncesto"
            linkUrl="/ballbylon"
          />
          <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zp86TpWSGjaghdlPLwH4AJiz8onT1WrB3bOfI" 
            title="💿 Mac Miller" 
            subtitle="GSAP & Three.js experiment"
            linkUrl="/mac-miller"
          />
          <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZS6FzRHKGO3uGKn8IF6U9LXNTsZWPt7rCcimf" 
            title="🌍 3D World" 
            subtitle="GSAP & Three.js experiment"
            linkUrl="/3d-world"
          />
          <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZAjg7Wh0ud4iTAoKWD6Z2aBGy7gsqXVmrMHfC" 
            title="📷 3D Photo Portfolio" 
            subtitle="Three.js experiment photo portfolio"
            linkUrl="/three-foto-portfolio"
          />
          <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZSvueATGO3uGKn8IF6U9LXNTsZWPt7rCcimfy" 
            title="📼 Photo Portfolio" 
            subtitle="Simple and clean photographer website"
            linkUrl="/foto-portfolio"
          />
          <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZZkerRMzVpI42HAsox3raXMSFvdTDYOfnc7BG" 
            title="💻 My Old Portfolio" 
            subtitle="My first portfolio"
            linkUrl="https://ignasi-portfolio.vercel.app/lbylon"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
