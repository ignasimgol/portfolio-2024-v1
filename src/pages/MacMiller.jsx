import React from 'react';
import './css/Ballbylon.css';
import { FaReact } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import { SiBlender, SiThreedotjs } from 'react-icons/si';
import BackButton from '../components/BackButton';

const Mac = () => {
  return (
    <div className="container">
      <BackButton />
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>Mac Miller Tribute</h1>
          <a href="https://mac-miller-eight.vercel.app/" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>In 2025, I launched the website <strong>Mac Miller Tribute</strong> as a project to practice, improve, and showcase my skills to future clients. The design of the webpage is mine.</p>
        <div className="images-ballbylon">
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZsXgobdRx3XZiABck94pfWJShwQVjM8m6T0F7" alt="Mac Miller media" />
          <img src="https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZX2EVegNlr4FZL6Qwtmsdfy5eNnG2V0aMBucK" alt="Mac Miller media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li><FaReact className="stack-icon" /> React - Front End</li>
            <li><SiThreedotjs className="stack-icon" /> Three JS - Vinyls</li>
            <li><SiBlender className="stack-icon" /> Blender- Vinyls</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>The development of Mac Miller Tribute focused on creating a visually engaging and immersive experience for fans. I used modern web technologies to ensure smooth performance and responsiveness across all devices.</p>
        <p>One of the biggest challenges was integrating a seamless music player while maintaining optimal page load speed. Additionally, designing an intuitive and aesthetically pleasing layout to honor Mac Miller’s legacy was a key focus.</p>
    </section>
      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>🪄 Activate and deactivate shaders that move with the mouse</li>
          <li>💿 Responsive design</li>
        </ul>
      </section>
    </div>
  );
};

export default Mac;