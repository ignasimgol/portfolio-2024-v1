import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Three from './components/Three';
import AboutMe from './pages/AboutMe';
import Ballbylon from './pages/Ballbylon';
import MacMiller from './pages/MacMiller';
import ThreeDWorld from './pages/ThreeDWorld';
import PhotoPortfolio from './pages/PhotoPortfolio';
import Baskeroseno from './pages/Baskeroseno';
import TantComPuc from './pages/TantComPuc';
import ThreePhotoPort from './pages/ThreePhotoPort';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './index.css'; // Importa el archivo de estilos

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    // Start loading images immediately
    const imageUrls = [
      "https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZlrfyUMHVBGdgrfMQsJvh6T85uayOKj9zFNYU",
      "https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zp86TpWSGjaghdlPLwH4AJiz8onT1WrB3bOfI",
      "https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zp86TpWSGjaghdlPLwH4AJiz8onT1WrB3bOfI",
      "https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZSvueATGO3uGKn8IF6U9LXNTsZWPt7rCcimfy",
      "https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZAjg7Wh0ud4iTAoKWD6Z2aBGy7gsqXVmrMHfC",
      "https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZZkerRMzVpI42HAsox3raXMSFvdTDYOfnc7BG"
    ];

    let loadedImages = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages++;
        const newProgress = (loadedImages / totalImages) * 100;
        setProgress(newProgress);
        
        if (loadedImages === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Verificar si todo está cargado
  useEffect(() => {
    if (imagesLoaded && modelLoaded) {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [imagesLoaded, modelLoaded]);

  // Añade este useEffect después de los otros
  useEffect(() => {
    // Timeout de seguridad: después de 10 segundos, avanza aunque no se haya cargado todo
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log('Timeout de seguridad activado: avanzando aunque no se haya cargado todo');
        setIsLoading(false);
      }
    }, 10000);
    
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

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

  // Función para manejar la carga del modelo 3D
  const handleModelLoad = () => {
    setModelLoaded(true);
  };

  return (
    <Router>
      <div className="app">
        {/* Renderizamos el componente Three siempre, con visibilidad pero fuera de pantalla */}
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <Three onLoad={handleModelLoad} />
        </div>
        
        {isLoading ? (
          <LoadingScreen progress={progress} />
        ) : (
          <>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            <Three onLoad={() => {}} /> {/* Aquí ya no necesitamos el callback */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/ballbylon" element={<Ballbylon/>} />
              <Route path="/foto-portfolio" element={<PhotoPortfolio/>} />
              <Route path="/baskeroseno" element={<Baskeroseno />} />
              <Route path="/mac-miller" element={<MacMiller />} />
              <Route path="/bucketzz" element={<TantComPuc />} />
              <Route path="/3d-world" element={<ThreeDWorld />} />
              <Route path="/3d-photo-portfolio" element={<ThreePhotoPort />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
