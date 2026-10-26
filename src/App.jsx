import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Learning from './components/Learning';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Importaciones de la librería de animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Inicializamos las animaciones al cargar la página
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
      offset: 100,    
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="intro-line" data-aos="fade-up">
          <p>Actualmente aprendiendo</p>
          <div className="tech-list">
            <span>REACT</span>
            <span>ANALISIS DE DATOS</span>
            <span>PYTHON</span>
            <span>SQL</span>
          </div>
        </section>

        <About />
        <Learning />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;