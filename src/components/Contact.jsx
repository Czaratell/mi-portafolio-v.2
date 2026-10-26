import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="contact-section section">
      <div className="contact-number" data-aos="fade-up">04</div>
      <p className="eyebrow" data-aos="fade-up" data-aos-delay="100">¿HABLAMOS?</p>
      
      <h2 data-aos="fade-up" data-aos-delay="200">Empecemos a <span>conectar.</span></h2>
      
      <p className="contact-text" data-aos="fade-up" data-aos-delay="300">
        Siempre estoy abierto a nuevas oportunidades, proyectos interesantes o simplemente a charlar sobre tecnología.
      </p>
      
      <div data-aos="zoom-in" data-aos-delay="400">
        <a href="mailto:tu-correo@email.com" className="contact-button">
          Enviar <span>mensaje</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;