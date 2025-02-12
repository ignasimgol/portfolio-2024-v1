import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Three from './components/Three';
import AboutMe from './pages/AboutMe';
import Ballbylon from './pages/Ballbylon';
import MacMiller from './pages/MacMiller';
import PhotoPortfolio from './pages/PhotoPortfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css'; // Importa el archivo de estilos

const App = () => {
  
  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  // Aplicar o quitar la clase .dark-mode en el <html> dependiendo del estado
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className="app">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <Three />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/ballbylon" element={<Ballbylon/>} />
          <Route path="/foto-portfolio" element={<PhotoPortfolio/>} />
          <Route path="/mac-miller" element={<MacMiller />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
