import React from 'react';
import './css/Ballbylon.css';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { SiBlender, SiThreedotjs } from 'react-icons/si';
import BackButton from '../components/BackButton';

const TantComPuc = () => {
  return (
    <div className="container">
      <BackButton />
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>Bucketzz App</h1>
          <a href="https://bucketzz.com/es/" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>In 2025, I launched this app, <strong>Bucketzz</strong> to help players improve their shooting at basketball</p>
        <div className="images-ballbylon">
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZcuM1aNpIVJPvr8hDmW1HetyGF2bz7iaYLEsf" alt="Bucketzz media" />
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZnpeZzIq9SrU17ogNLBpt2iJYzds5RVIahkbP" alt="Bucketzz media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li><RiNextjsFill className="stack-icon" />React</li>
            <li><RiTailwindCssFill className="stack-icon" />Capacitor JS</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>This development was pretty easy to execute. I was trying to do a clean and effective design for helping players track and check their shooting practices</p>
    </section>
      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>Track shots by zones and series</li>
          <li>Share results</li>
          <li>Check your progress</li>
          <li>📱 Available in iOS and Android</li>
        </ul>
      </section>
    </div>
  );
};

export default TantComPuc;