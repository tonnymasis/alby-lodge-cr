import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          {/* Text Content */}
          <div className="about__text">
            <div className="about__header">
              <span className="about__subtitle">Nuestra Historia</span>
              <h2 className="about__title">
                Un Refugio Natural en el
                <span className="about__title--highlight"> Corazón del Caribe</span>
              </h2>
            </div>

            <div className="about__description">
              <p className="about__paragraph">
                Alby Lodge nació del sueño de crear un espacio donde los viajeros 
                pudieran reconectarse con la naturaleza sin renunciar al confort. 
                Ubicado estratégicamente en Cahuita, nuestro lodge es la puerta 
                de entrada perfecta al Parque Nacional Cahuita y sus maravillas naturales.
              </p>
              
              <p className="about__paragraph">
                Desde nuestros inicios, hemos mantenido un compromiso firme con 
                la sostenibilidad y el respeto por el entorno natural que nos rodea. 
                Cada rincón de nuestro lodge ha sido diseñado para ofrecer una 
                experiencia auténtica que honre la rica biodiversidad del Caribe costarricense.
              </p>

              <p className="about__paragraph">
                Nuestra filosofía se basa en brindar hospitalidad caribeña genuina, 
                donde cada huésped se siente como en casa mientras explora los 
                tesoros naturales de esta región única.
              </p>
            </div>

            {/* Values */}
            <div className="about__values">
              <h3 className="about__values-title">Nuestros Valores</h3>
              <div className="about__values-grid">
                <div className="about__value">
                  <div className="about__value-icon">
                    <i className="icon" data-icon="leaf"></i>
                  </div>
                  <div className="about__value-content">
                    <h4 className="about__value-title">Sostenibilidad</h4>
                    <p className="about__value-text">
                      Operamos con prácticas eco-amigables que protegen nuestro entorno natural.
                    </p>
                  </div>
                </div>

                <div className="about__value">
                  <div className="about__value-icon">
                    <i className="icon" data-icon="heart"></i>
                  </div>
                  <div className="about__value-content">
                    <h4 className="about__value-title">Hospitalidad</h4>
                    <p className="about__value-text">
                      Cada huésped recibe atención personalizada y calidez humana auténtica.
                    </p>
                  </div>
                </div>

                <div className="about__value">
                  <div className="about__value-icon">
                    <i className="icon" data-icon="users"></i>
                  </div>
                  <div className="about__value-content">
                    <h4 className="about__value-title">Comunidad</h4>
                    <p className="about__value-text">
                      Apoyamos el desarrollo local y la cultura caribeña costarricense.
                    </p>
                  </div>
                </div>

                <div className="about__value">
                  <div className="about__value-icon">
                    <i className="icon" data-icon="star"></i>
                  </div>
                  <div className="about__value-content">
                    <h4 className="about__value-title">Excelencia</h4>
                    <p className="about__value-text">
                      Nos esforzamos por superar las expectativas en cada detalle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="about__images">
            <div className="about__image-grid">
              <div className="about__image about__image--main">
                <img 
                  src="./assets/images/about-lodge-exterior.png" 
                  alt="Exterior del Alby Lodge rodeado de naturaleza"
                  className="about__img"
                />
              </div>
              <div className="about__image about__image--secondary">
                <img 
                  src="./assets/images/about-tropical-garden.png" 
                  alt="Jardín tropical del lodge"
                  className="about__img"
                />
              </div>
              <div className="about__image about__image--tertiary">
                <img 
                  src="./assets/images/about-cahuita-beach.jpeg" 
                  alt="Playa de Cahuita cerca del lodge"
                  className="about__img"
                />
              </div>
            </div>

            {/* Statistics */}
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Años de Experiencia</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">500+</span>
                <span className="about__stat-label">Huéspedes Felices</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">5★</span>
                <span className="about__stat-label">Calificación Promedio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About