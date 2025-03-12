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
          <h1>Tant Com Puc</h1>
          <a href="https://tant-com-puc.vercel.app/" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>In 2025, I launched the website <strong>Tant Com Puc</strong> for my mother's company</p>
        <div className="images-ballbylon">
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZWpnHRGldwM62EqnuspVFR0a85iCLkJrmHXyc" alt="Mac Miller media" />
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZdL2l0KckVR3vTU8Pq6O1MAINYZC4cKlezywm" alt="Mac Miller media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li><RiNextjsFill className="stack-icon" /> Next JS</li>
            <li><RiTailwindCssFill className="stack-icon" /> Tailwind</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>This development was pretty easy to execute. I was trying to do a clean and effective design using Tailwind CSS</p>
    </section>
      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>💼 Company Informative Webpage</li>
          <li>📱 Responsive design</li>
        </ul>
      </section>
    </div>
  );
};

export default TantComPuc;