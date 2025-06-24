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
            subtitle="The basketball library"
            linkUrl="/ballbylon"
          />
           <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z5BQcOnlXyYcgthWlK9fP5qniruVbOIsAGNDj" 
            title="📊 Bucketzz" 
            subtitle="Basketball Mobile App"
            linkUrl="/bucketzz"
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
            linkUrl="/3d-photo-portfolio"
          />
          <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZSvueATGO3uGKn8IF6U9LXNTsZWPt7rCcimfy" 
            title="📼 Photo Portfolio" 
            subtitle="Simple and clean photographer website"
            linkUrl="/foto-portfolio"
          />
         
        </div>
      </section>
    </div>
  );
};

export default Home;
