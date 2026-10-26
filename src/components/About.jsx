import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="sobre-mi" className="about section">
      {/* El número entra desde la derecha */}
      <div className="section-number" data-aos="fade-right">
        01
      </div>

      <div className="section-content">
        {/* El antetítulo sube primero */}
        <p className="eyebrow" data-aos="fade-up">
          SOBRE MÍ
        </p>

        {/* El título sube un instante después */}
        <h2 data-aos="fade-up" data-aos-delay="100">
          El comienzo de algo <span>grande.</span>
        </h2>

        <div className="about-grid">
          {/* El texto principal sube con un poco más de retraso */}
          <div className="about-main" data-aos="fade-up" data-aos-delay="200">
            <p className="large-text">
              No estoy aquí para fingir que ya lo sé todo. Estoy aquí para
              aprender, experimentar y construir.
            </p>

            <p>
              Soy estudiante de Ingeniería Informática y actualmente estoy
              desarrollando mis conocimientos en programación y tecnología.
            </p>

            <p>
              Cada nuevo concepto que aprendo es una pieza más para construir
              el profesional que quiero llegar a ser.
            </p>
          </div>

          {/* Las estadísticas entran deslizándose desde la izquierda */}
          <div className="about-side" data-aos="fade-left" data-aos-delay="300">
            <div className="stat">
              <strong>01</strong>
              <span>Aprender</span>
            </div>

            <div className="stat">
              <strong>02</strong>
              <span>Experimentar</span>
            </div>

            <div className="stat">
              <strong>03</strong>
              <span>Construir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;