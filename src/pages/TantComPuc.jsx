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
            <li>📱 Capacitor JS</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>This development was relatively easy to implement. I aimed for a clean and efficient design to help players track and review their shooting practices.</p>
        <p>The real challenge came when publishing the app to the App Store and Play Store—it was a steep learning curve, but incredibly rewarding.</p>
        <p>Facing and managing all the different situations throughout the process has helped me grow significantly, both technically and personally.</p>
      </section>
      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>🛠️ Track shots by zones and series</li>
          <li>📥 Share results</li>
          <li>📊 Check your progress</li>
          <li>📱 Available in iOS and Android</li>
        </ul>
      </section>
    </div>
  );
};

export default TantComPuc;