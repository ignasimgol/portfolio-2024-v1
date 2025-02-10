import React from 'react';
import './css/Ballbylon.css';
import { FaReact } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import { SiSupabase, SiBlender, SiThreedotjs } from 'react-icons/si';
import { IoLibraryOutline, IoSearchOutline, IoHeartOutline } from 'react-icons/io5';

const Mac = () => {
  return (
    <div className="container">
      <section className='article-container-pres'>
        <div className='article-header'>
          <h1>Mac Miller Tribute</h1>
          <a href="https://ballbylon.com" target="_blank"> 
            <TbWorld className="feature-icon" size={20}/>
          </a>
        </div>
        
        <p>El 18/11/2024 publiqué la página web <strong>ballbylon</strong> con la idea de ser una biblioteca de contenido sobre baloncesto.</p>
        <div className="images-ballbylon">
          <img src="https://utfs.io/f/DM7CcnrlhW9Zk37yfrs5cpAJ8UsG0IKWxZtiXDYzb9yBlEMm" alt="ballbylon media" />
          <img src="https://utfs.io/f/DM7CcnrlhW9Zpl334OSGjaghdlPLwH4AJiz8onT1WrB3bOfI" alt="ballbylon media" />
        </div>
      </section>

      <section className="article-container-1">
        <h2>Stack</h2>
        <div className="stack-list">
          <ul>
            <li><FaReact className="stack-icon" /> React</li>
            <li><SiThreedotjs className="stack-icon" /> Three JS</li>
            <li><SiBlender className="stack-icon" /> Blender</li>
          </ul>
        </div>
      </section>

      <section className="article-container-2">
        <h2>Desarrollo</h2>
        <p>El desarrollo de Ballbylon se centró en crear una experiencia de usuario rápida y accesible. Utilicé Supabase para manejar la autenticación de usuarios y la gestión de datos de manera segura. La integración con Cloudflare mejoró la velocidad de carga de la página y ofreció protección contra ataques DDoS.</p>
        <p>Uno de los mayores retos fue implementar una función de búsqueda eficiente para filtrar contenido de la biblioteca. Esto se logró utilizando índices personalizados en la base de datos de Supabase.</p>
      </section>

      <section className="article-container-features">
        <h2>Funcionalidades</h2>
        <ul>
          <li><IoLibraryOutline className="feature-icon" /> Base de datos de contenido organizado por temas y creadores de contenido.</li>
          <li><IoSearchOutline className="feature-icon" /> Filtros para descubrir artículos, vídeos y podcasts.</li>
          <li><IoHeartOutline className="feature-icon" /> Listas personalizadas para que los usuarios guarden contenido.</li>
        </ul>
      </section>
    </div>
  );
};

export default Mac;