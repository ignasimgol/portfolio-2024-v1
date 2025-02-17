import React from 'react';
import './css/Ballbylon.css';
import { TbWorld } from "react-icons/tb";


const PhotoPortfolio = () => {
  return (
    <div className="container">
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>Mac Miller Tribute</h1>
          <a href="https://bymariadelrio.vercel.app/" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>This was my first real project as a programmer. A portfolio for my girlfriend, who still uses it. Simple, clean and easy to use and update.</p>
        <div className="images-ballbylon">
          <img src="https://utfs.io/f/DM7CcnrlhW9Zk37yfrs5cpAJ8UsG0IKWxZtiXDYzb9yBlEMm" alt="ballbylon media" />
          <img src="https://utfs.io/f/DM7CcnrlhW9Zpl334OSGjaghdlPLwH4AJiz8onT1WrB3bOfI" alt="ballbylon media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li>💻 HTML, CSS and JS</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>This portfolio was based in a YouTube tutorial. It really helped me to practice about the dark mode feature, which was the first time I was trying to implement.</p>
        <p>I discovered to different ways to optimize videos and photos, to make the page still fast no matter how many materials were in it.</p>
      </section>
      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>💻 Photo portfolio</li>
          <li>🌍 Easy to navigate</li>
        </ul>
      </section>
    </div>
  );
};

export default PhotoPortfolio