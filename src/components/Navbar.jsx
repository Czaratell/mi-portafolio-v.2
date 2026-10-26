import React from 'react';
import './Navbar.css'; // Mueve el CSS del nav a este archivo

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="#inicio" className="logo">
          CZ<span>.</span>
        </a>

        <div className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#aprendiendo">Aprendiendo</a>
          <a href="#formacion">Formación</a>
          <a href="#contacto">Contacto</a>
        </div>

        <a href="#contacto" className="nav-button">
          Hablemos
        </a>
      </nav>
    </header>
  );
};

export default Navbar;