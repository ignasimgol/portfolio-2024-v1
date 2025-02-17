import React from 'react';
import './css/Ballbylon.css';
import { TbWorld } from "react-icons/tb";
import { SiBlender, SiThreedotjs } from 'react-icons/si';
import BackButton from '../components/BackButton';

const ThreeDWorld = () => {
  return (
    <div className="container">
      <BackButton />
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>The 3d World</h1>
          <a href="https://3d-world-five.vercel.app/" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>This webpage in process was one of my dreams when I started in web development. To able to create an experience like this on the net with Three.js and Blender has been amazing.</p>
        <div className="images-ballbylon">
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZHsuXzKMOt69jEp5iJyP7QB2rLf3xSz0NeU4D" alt="ballbylon media" />
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZgEhh0t6nqPHkb9iUKhrN3uTwExRIey6szZ8L" alt="ballbylon media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li>💻 HTML, CSS and JS</li>
            <li><SiThreedotjs className="stack-icon" /> Three JS - Vinyls and Shaders</li>
            <li><SiBlender className="stack-icon" /> Blender- Vinyls</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>This project is based on tutorial from <a href="https://www.youtube.com/@andrewwoan" target='_blank' className='normal-link'>Andrew Woan</a></p>
      </section>

      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>📱 Controles para móvil incluidos</li>
          <li>✅ Misiones por completar</li>
          <li>🌘 Dark mode disponible.</li>
        </ul>
      </section>
    </div>
  );
};

export default ThreeDWorld;