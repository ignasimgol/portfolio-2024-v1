// Ejemplo de componente de página (Page.jsx)
import React from 'react';
import { FaGithub, FaTwitter, FaGlobe, FaLinkedin } from 'react-icons/fa';
import './css/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className='card-profile'>

        <div className="card-top">
          <img src="/assets/profile.jpeg" alt="profile image" />
          <div className="list-xxss">
            <ul>
              <li>
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={18} /> 
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={18} />
                </a>
              </li>
              <li>
                <a href="https://tu-sitio-web.com" target="_blank" rel="noopener noreferrer">
                  <FaGlobe size={18} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-text">
          <p>Hey! I'm Ignasi Muñoz. Welcome to my portfolio. I hope you enjoy my projects. Contact me if you have any question or if you want to work together!</p>
          <p>With over a decade of dedicated coaching experience in basketball 🏀, I've embraced challenges, fostered teamwork, and honed invaluable skills such as responsibility, attention to detail, and active listening. My journey has taken me from courtsides in various countries, including Finland 🇫🇮, where I seamlessly adapted to diverse environments and collaborated with individuals from all walks of life.</p>
          <p>Driven by an insatiable curiosity and an unyielding desire to learn, I've ventured into the world of programming. Currently pursuing a Master's in Front-End Development at Universitat Oberta de Catalunya, I am channeling my passion for creativity and innovation into mastering the intricacies of web development.</p>
          <p>As an individual with an innate talent for visual expression and a keen interest in the dynamic realm of 3D design, I am further enhancing my skills through a course in Three.js, paving the way for groundbreaking digital creations.</p>
        </div>

      </div>
      
    </div>
  );
};

export default AboutMe;
