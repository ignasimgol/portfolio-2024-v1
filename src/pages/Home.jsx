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
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZSvueATGO3uGKn8IF6U9LXNTsZWPt7rCcimfy" 
            title="📷 Photo Portfolio" 
            subtitle="Three.js experiment photo portfolio"
            linkUrl="/foto-portfolio"
          />
          <Card 
            imageUrl="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZAjg7Wh0ud4iTAoKWD6Z2aBGy7gsqXVmrMHfC" 
            title="📼 Photo Portfolio" 
            subtitle="Simple and clean photographer website"
            linkUrl="/ballbylon"
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

