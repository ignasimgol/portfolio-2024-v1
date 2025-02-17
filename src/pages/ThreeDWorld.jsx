import React from 'react';
import './css/Ballbylon.css';
import { TbWorld } from "react-icons/tb";
import { SiBlender, SiThreedotjs } from 'react-icons/si';

const ThreeDWorld = () => {
  return (
    <div className="container">
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>The 3d World</h1>
          <a href="https://3d-world-five.vercel.app/" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>This webpage in process was one of my dreams when I started in web development. To able to create an experience like this on the net with Three.js and Blender has been amazing.</p>
        <div className="images-ballbylon">
          <img src="https://utfs.io/f/DM7CcnrlhW9Zk37yfrs5cpAJ8UsG0IKWxZtiXDYzb9yBlEMm" alt="ballbylon media" />
          <img src="https://utfs.io/f/DM7CcnrlhW9Zpl334OSGjaghdlPLwH4AJiz8onT1WrB3bOfI" alt="ballbylon media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li>💻 HTML, CSS and JS</li>
            <li><SiThreedotjs className="stack-icon" /> Three JS - Vinyls</li>
            <li><SiBlender className="stack-icon" /> Blender- Vinyls</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Development</h2>
        <p>El desarrollo de Ballbylon se centró en crear una experiencia de usuario rápida y accesible. Utilicé Supabase para manejar la autenticación de usuarios y la gestión de datos de manera segura. La integración con Cloudflare mejoró la velocidad de carga de la página y ofreció protección contra ataques DDoS.</p>
        <p>Uno de los mayores retos fue implementar una función de búsqueda eficiente para filtrar contenido de la biblioteca.</p>
      </section>

      <section className="article-container-features">
        <h2>Features</h2>
        <ul>
          <li>📚 Base de datos de contenido organizado por temas y creadores de contenido.</li>
          <li>🔎 Filtros para descubrir artículos, vídeos y podcasts.</li>
          <li>✅ Listas personalizadas para que los usuarios guarden contenido.</li>
        </ul>
      </section>
    </div>
  );
};

export default ThreeDWorld;