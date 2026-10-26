import React from 'react';
import './Hero.css';
import fotoPerfil from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="eyebrow" data-aos="fade-right">INGENIERÍA INFORMÁTICA · TECNOLOGÍA</p>
        
        <h1 data-aos="fade-right" data-aos-delay="100">
          Construyendo mi <span>camino</span> en tecnología.
        </h1>
        
        <p className="hero-description" data-aos="fade-right" data-aos-delay="200">
          Hola, soy Cristian Daniel Zárate. Estudiante de Ingeniería Informática, explorando la programación, el desarrollo web y el mundo de la tecnología.
        </p>
        
        <div className="hero-buttons" data-aos="fade-right" data-aos-delay="300">
          <a href="#sobre-mi" className="primary-button">
            Conocerme
          </a>
          <a href="#aprendiendo" className="text-button">
            Lo que estoy aprendiendo →
          </a>
        </div>
      </div>

      {/* Aquí está la animación de tu tarjeta fotográfica */}
      <div className="hero-visual" data-aos="zoom-in-left" data-aos-delay="400" data-aos-duration="1200">
        <div className="visual-circle"></div>
        <div className="profile-card">
          <div className="card-top">
            <span>ESTUDIANTE</span>
            <span>2026</span>
          </div>
          
          <div className="profile-photo">
            <img src={fotoPerfil} alt="Foto de Cristian Daniel" />
          </div>
          
          <h2>
            Cristian<br />
            Daniel
          </h2>
          
          <p>Ingeniería Informática</p>
          
          <div className="card-line"></div>
          
          <div className="card-bottom">
            <span>COLOMBIA</span>
            <span>01</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;