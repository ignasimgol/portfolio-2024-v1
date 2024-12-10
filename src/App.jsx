// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Three from './components/Three';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Ballbylon from './pages/Ballbylon';
import PhotoPortfolio from './pages/PhotoPortfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css'; // Importa el archivo de estilos

const App = () => {
  return (
    <Router>
      <div className="app">
       
      <Navbar />
      <Three />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ballbylon" element={<Ballbylon/>} />
          <Route path="/foto-portfolio" element={<PhotoPortfolio/>} />
        </Routes>

        <Footer />
        
      </div>

    </Router>
    
  );
};

export default App;
