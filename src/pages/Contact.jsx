// Ejemplo de componente de página (Page.jsx)
import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contacto</h1>
      <div className='social-contact'>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/username" target="_blank" rel="noreferrer">
              <img src="/assets/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
      
            <li>
           <a href="https://twitter.com/username" target="_blank" rel="noreferrer">
            <img src="/assets/twitter.png" alt="Twitter" />
          </a>
        </li>
        </ul>  
      </div>
      
    </div>
  );
};

export default Contact;
