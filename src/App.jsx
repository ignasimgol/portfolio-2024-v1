// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import './index.css'; // Importa el archivo de estilos

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Barra de navegación simple */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        {/* Configuración de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
