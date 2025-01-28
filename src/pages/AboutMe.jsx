import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaGlobe, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './css/AboutMe.css';

const AboutMe = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyEmailToClipboard = () => {
    const email = 'ignasimgol@gmail.com'; // Tu correo electrónico
    navigator.clipboard.writeText(email)
      .then(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000); // Oculta el mensaje después de 2 segundos
      })
      .catch(() => alert('Error al copiar el correo'));
  };

  return (
    <div className="container">
      <h1>About Me</h1>

      <div className='card-profile'>
        <div className="card-top">
          <img src="/assets/profile.jpeg" alt="profile image" />
          <div className="list-xxss">
            <ul>
              <li>
                <a href="https://github.com/ignasimgol" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={18} /> 
                </a>
              </li>
              <li>
                <a href="https://x.com/ignasimgol" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={18} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ignasi-mu%C3%B1oz-gol-81557515b" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={18} />
                </a>
              </li>
              <li>
                <a onClick={copyEmailToClipboard}> {/* Cambia el enlace por un onClick */}
                  <FaEnvelope size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-text">
          <p>Hey! I'm Ignasi Muñoz, a Front End Developer based in Abu Dhabi. Welcome to my portfolio.</p>
          <p>With over a decade of dedicated coaching experience in basketball 🏀, I've embraced challenges, fostered teamwork, and honed invaluable skills such as responsibility, attention to detail, and active listening. My journey has taken me from courtsides in various countries, including Finland 🇫🇮 and now the UAE 🇦🇪, where I seamlessly adapted to diverse environments and collaborated with individuals from all walks of life.</p>
          <p>Driven by an insatiable curiosity and an unyielding desire to learn, I've ventured into the world of programming. Currently pursuing a Master's in <strong>Front-End Development</strong> at Universitat Oberta de Catalunya, I am channeling my passion for creativity and innovation into mastering the intricacies of web development.</p>
          <p>As an individual with an innate talent for visual expression and a keen interest in the dynamic realm of <strong>3D design</strong>, I am further enhancing my skills through a course in Three.js, paving the way for groundbreaking digital creations.</p>
          <p>I hope you enjoy my projects. Contact me if you have any question or if you want to work together!</p>
        </div>
      </div>

      {/* Mensaje de confirmación */}
      {showTooltip && (
        <div className="tooltip">
          ¡Email copiado!
        </div>
      )}
    </div>
  );
};

export default AboutMe;