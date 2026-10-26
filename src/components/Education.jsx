import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="formacion" className="education section">
      <div className="section-number" data-aos="fade-right">03</div>
      
      <div className="section-content">
        <p className="eyebrow" data-aos="fade-up">FORMACIÓN</p>
        <h2 data-aos="fade-up" data-aos-delay="100">Mi camino <span>académico.</span></h2>

        <div className="timeline">
          <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
            <div className="timeline-date">ACTUALIDAD</div>
            <div className="timeline-content">
              <h3>Ingeniería Informática</h3>
              <p>Estudiante activo, desarrollando habilidades en software, redes y análisis de datos.</p>
            </div>
          </div>

          <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
            <div className="timeline-date">APRENDIZAJE CONTINUO</div>
            <div className="timeline-content">
              <h3>Cursos y Autodidacta</h3>
              <p>Complementando mi formación universitaria con proyectos prácticos y nuevas tecnologías.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;