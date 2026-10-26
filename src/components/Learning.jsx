import React from 'react';
import './Learning.css';

const Learning = () => {
  return (
    <section id="aprendiendo" className="learning section">
      <div className="section-number" data-aos="fade-right">02</div>
      
      <div className="section-content">
        <p className="eyebrow" data-aos="fade-up">LO QUE ESTOY APRENDIENDO</p>
        
        <h2 data-aos="fade-up" data-aos-delay="100">
          Construyendo mis <span>bases.</span>
        </h2>

        <div className="learning-list">
          {/* Cada ítem de la lista entra uno después del otro */}
          <div className="learning-item" data-aos="fade-up" data-aos-delay="200">
            <span className="item-number">01</span>
            <div>
              <h3>Desarrollo Frontend</h3>
              <p>Creando interfaces web con HTML, CSS, JavaScript y React.</p>
            </div>
            <span className="arrow">↗</span>
          </div>

          <div className="learning-item" data-aos="fade-up" data-aos-delay="300">
            <span className="item-number">02</span>
            <div>
              <h3>Python & Lógica</h3>
              <p>Fundamentos de programación y resolución de algoritmos.</p>
            </div>
            <span className="arrow">↗</span>
          </div>

          <div className="learning-item" data-aos="fade-up" data-aos-delay="400">
            <span className="item-number">03</span>
            <div>
              <h3>Bases de Datos</h3>
              <p>Diseño y consultas con SQL para el manejo de información.</p>
            </div>
            <span className="arrow">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;