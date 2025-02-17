import React from 'react';
import './css/Ballbylon.css';
import { FaReact, FaCloudflare } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import { SiSupabase } from 'react-icons/si';
import { IoLibraryOutline, IoSearchOutline, IoHeartOutline } from 'react-icons/io5';

const Ballbylon = () => {
  return (
    <div className="container">
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>ballbylon</h1>
          <a href="https://ballbylon.com" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>On 11/18/2024, I launched the website <strong>ballbylon</strong> with the idea of being a basketball content library. ballbylon was born out of the need for a structured and easily accessible basketball content library. Many platforms provide scattered information, but I wanted to centralize high-quality articles, videos, and podcasts into a single, user-friendly platform.</p>
        <p>It has been my first real project and it has helped me to learn and deal with a lot of problems I had never experienced before. It has made me grow and I'm happy to have achieved the goals I initially set.</p>
        <div className="images-ballbylon">
          <img src="https://utfs.io/f/DM7CcnrlhW9Zk37yfrs5cpAJ8UsG0IKWxZtiXDYzb9yBlEMm" alt="ballbylon media" />
          <img src="https://utfs.io/f/DM7CcnrlhW9Zpl334OSGjaghdlPLwH4AJiz8onT1WrB3bOfI" alt="ballbylon media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li><FaReact className="stack-icon" /> React - Front End</li>
            <li><SiSupabase className="stack-icon" /> Supabase - Authentication and data base</li>
            <li><FaCloudflare className="stack-icon" /> Cloudflare - Hosting and security</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>The development of ballbylon focused on creating a fast and accessible user experience. I used Supabase to handle user authentication and data management securely. Integration with Cloudflare improved page load speed and provided protection against DDoS attacks.</p>
        <p>One of the biggest challenges was implementing an efficient search function to filter library content, as well as implementing the ability to create and save lists.</p>
      </section>

      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>📚 Database of content organized by topics and content creators.</li>
          <li>🔎 Filters to discover articles, videos, and podcasts.</li>
          <li>✅ Personalized lists for users to save content.</li>
          <li>🌍 Website is translated to 3 lenguages.</li>
        </ul>
      </section>
    </div>
  );
};

export default Ballbylon;