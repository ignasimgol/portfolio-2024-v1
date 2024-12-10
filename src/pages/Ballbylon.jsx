import React from 'react';
import './css/Ballbylon.css';

const Ballbylon = () => {
  return (
    <div className="container">

      <section className='article-container-pres'>
        <h1>ballbylon</h1>
        <p>El 18/11/2024 publiqué la página web <a href="http://ballbylon.com" target='_blank'>ballbylon</a> con la idea de ser una biblioteca de contenido sobre baloncesto.</p>
        <div className="images-ballbylon">
          <img src="https://utfs.io/f/DM7CcnrlhW9Zk37yfrs5cpAJ8UsG0IKWxZtiXDYzb9yBlEMm" alt="ballbylon media" />
          <img src="https://utfs.io/f/DM7CcnrlhW9Zpl334OSGjaghdlPLwH4AJiz8onT1WrB3bOfI" alt="ballbylon media" />
        </div>
      </section>
      
      <section className="article-container-1">
        <h2>Stack</h2>

      </section>

      <section className="article-container-2">
        <h2>Desarrollo</h2>

      </section>

    </div>
    );
};

export default Ballbylon;