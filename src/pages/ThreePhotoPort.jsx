import React from 'react';
import './css/Ballbylon.css';
import { TbWorld } from "react-icons/tb";
import BackButton from '../components/BackButton';

const ThreePhotoPort = () => {
  return (
    <div className="container">
      <BackButton />
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>3D Photo Portfolio</h1>
          <a href="https://photo-portfolio-3js.vercel.app/" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>This a photo/video portfolio experiment with Three.js, based on a <a href="https://x.com/0xca0a?lang=ca">@0xca0a</a>  video I saw on Twitter.</p>
        <div className="images-ballbylon">
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zj9QcBXrVnyrCSgjcqJWdZufx87wUAlOXF4pk" alt="ballbylon media" />
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZxNXhmB5GhpvSgs5yaJmncdDLYZ2wQF6UiqNo" alt="ballbylon media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li>💻 HTML, CSS, JS and Three.js</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>It was really nice to expirement with this idea and it really helped me to understand all the alternatives Three.js offers.</p>
      </section>
      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>💻 Photo/Video portfolio</li>
          <li>🌍 Interactive and immersive feeling</li>
        </ul>
      </section>
    </div>
  );
};

export default ThreePhotoPort;