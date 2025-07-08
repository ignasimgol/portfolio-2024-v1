import React from 'react';
import './css/Ballbylon.css';
import { FaCloudflare } from 'react-icons/fa';
import { TbBrandAstro } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { FaJs } from "react-icons/fa";
import BackButton from '../components/BackButton';

const Baskeroseno = () => {
  return (
    <div className="container">
      <BackButton />
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>Baskeroseno</h1>
          <a href="https://baske-scouting.netlify.app/" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>On 04/10/2025, I presented a complete website redesign proposal for a basketball scouting company looking to modernize its outdated online presence. The company specializes in talent identification and player evaluation, but its previous website lacked structure, mobile responsiveness, and a clear way to communicate its services.</p>
        <p>My goal was to help the brand build a fresh digital identity—more intuitive, visual, and aligned with today’s web standards. I focused on reorganizing the content, improving the user experience, and highlighting their core strengths: scouting reports, methodology, and success stories.</p>
        <p>This project has been a valuable experience for me, as it allowed me to work directly with a real client, understand their needs, and offer a solution that reflects both their vision and my own approach to design and usability. It also helped me grow in areas like communication, planning, and working with real-world constraints.</p>
        <div className="images-ballbylon">
          <img src="https://ysf47kvqyz.ufs.sh/f/jOedvmGatFHG3kDhTQgw4WAMiXJ0L7khqwDHuCT8vOBpdZY2" alt="ballbylon media" />
          <img src="https://ysf47kvqyz.ufs.sh/f/jOedvmGatFHG2arw5fjBgrUARvhBSGn8uE0s1ZNHL6JdaieT" alt="ballbylon media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li><TbBrandAstro className="stack-icon" /> Astro - Front End</li>
            <li><FaJs className="stack-icon" /> Particle JS - Particles interaction on the hero</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>This project was focused on redesigning and modernizing the official website of Baskeroseno, a scouting company specializing in basketball talent evaluation. The previous version was outdated and lacked responsiveness, so my main goal was to bring structure, clarity, and performance to the user experience.</p>
        <p>I worked on rebuilding the layout from scratch, improving navigation and optimizing the site for mobile devices. Supabase was used for content management and backend functionality, while Cloudflare helped ensure faster load times and security. One of the main challenges was reorganizing years of existing scouting content and making it easy to explore for both clubs and athletes.</p>
      </section>

      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
            <li>📊 Structured database of scouting reports organized by category and player profile.</li>
            <li>✅ Responsive layout adapted for desktop, tablet, and mobile screens.</li>
            <li>🌍 Fully available in Spanish, with plans to expand to other languages.</li>
        </ul>
      </section>
    </div>
  );
};

export default Baskeroseno;