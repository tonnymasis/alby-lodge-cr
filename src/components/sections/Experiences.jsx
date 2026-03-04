import React, { useState } from 'react'
import Button from '../ui/Button'
import './Experiences.css'

const Experiences = () => {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      id: 'parque-nacional',
      title: 'Parque Nacional Cahuita',
      subtitle: 'Naturaleza Virgen a Tus Pies',
      description: 'A solo 5 minutos caminando desde nuestro lodge, descubre uno de los parques nacionales más biodiversos de Costa Rica.',
      highlights: [
        'Senderos interpretativos de 7 km',
        'Arrecife de coral más accesible del país',
        'Observación de monos, perezosos y tucanes',
        'Playas de arena blanca y aguas cristalinas'
      ],
      image: '/assets/images/experiences/cahuita-national-park.jpg',
      duration: 'Medio día o día completo',
      difficulty: 'Fácil a moderado',
      bestTime: 'Todo el año'
    },
    {
      id: 'playa-negra',
      title: 'Playa Negra',
      subtitle: 'Arena Volcánica y Surf Caribeño',
      description: 'Una de las playas más icónicas de Costa Rica, famosa por su arena negra volcánica y excelentes olas para surfear.',
      highlights: [
        'Arena negra única de origen volcánico',
        'Excelentes condiciones para surf',
        'Ambiente relajado y bohemio',
        'Restaurantes locales auténticos'
      ],
      image: '/assets/images/experiences/playa-negra.jpg',
      duration: 'Medio día',
      difficulty: 'Fácil',
      bestTime: 'Diciembre a abril para surf'
    },
    {
      id: 'jaguar-rescue',
      title: 'Centro de Rescate Jaguar',
      subtitle: 'Conservación en Acción',
      description: 'Visita este importante centro de rescate de animales silvestres y aprende sobre los esfuerzos de conservación locales.',
      highlights: [
        'Monos, perezosos y aves rescatadas',
        'Programas de rehabilitación',
        'Educación sobre conservación',
        'Apoyo a la fauna local'
      ],
      image: '/assets/images/experiences/jaguar-rescue.jpg',
      duration: '2-3 horas',
      difficulty: 'Fácil',
      bestTime: 'Todo el año'
    },
    {
      id: 'pueblo-cahuita',
      title: 'Pueblo de Cahuita',
      subtitle: 'Cultura Afrocaribeña Auténtica',
      description: 'Sumérgete en la rica cultura local, con su música, gastronomía y tradiciones afrocaribeñas únicas.',
      highlights: [
        'Arquitectura caribeña colorida',
        'Música reggae y calipso en vivo',
        'Gastronomía criolla auténtica',
        'Mercados locales y artesanías'
      ],
      image: '/assets/images/experiences/cahuita-village.jpg',
      duration: 'Medio día',
      difficulty: 'Fácil',
      bestTime: 'Todo el año'
    },
    {
      id: 'tortuguero',
      title: 'Parque Nacional Tortuguero',
      subtitle: 'Amazonía Costarricense',
      description: 'Excursión de día completo a los canales de Tortuguero, conocido como la "Amazonía de Costa Rica".',
      highlights: [
        'Navegación por canales naturales',
        'Abundante vida silvestre acuática',
        'Bosque tropical lluvioso prístino',
        'Posible avistamiento de manatíes'
      ],
      image: '/assets/images/experiences/tortuguero.jpg',
      duration: 'Día completo',
      difficulty: 'Fácil',
      bestTime: 'Julio a octubre (temporada de tortugas)'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="experiences" className="experiences">
      <div className="experiences__container">
        {/* Section Header */}
        <div className="experiences__header">
          <span className="experiences__subtitle">Experiencias Únicas</span>
          <h2 className="experiences__title">
            Descubre las Maravillas del
            <span className="experiences__title--highlight"> Caribe Costarricense</span>
          </h2>
          <p className="experiences__description">
            Desde nuestro lodge tienes acceso privilegiado a algunas de las 
            experiencias naturales más extraordinarias de Costa Rica. Cada día 
            puede ser una nueva aventura en este paraíso tropical.
          </p>
        </div>

        {/* Experiences Navigation */}
        <div className="experiences__nav">
          {experiences.map((experience, index) => (
            <button
              key={experience.id}
              className={`experiences__nav-item ${activeExperience === index ? 'experiences__nav-item--active' : ''}`}
              onClick={() => setActiveExperience(index)}
            >
              <span className="experiences__nav-title">{experience.title}</span>
            </button>
          ))}
        </div>

        {/* Active Experience Detail */}
        <div className="experiences__detail">
          <div className="experiences__content">
            {/* Experience Image */}
            <div className="experiences__image">
              <img
                src={experiences[activeExperience].image}
                alt={experiences[activeExperience].title}
                className="experiences__img"
              />
              <div className="experiences__image-overlay">
                <div className="experiences__image-info">
                  <span className="experiences__duration">
                    <i className="icon" data-icon="clock"></i>
                    {experiences[activeExperience].duration}
                  </span>
                  <span className="experiences__difficulty">
                    <i className="icon" data-icon="trending-up"></i>
                    {experiences[activeExperience].difficulty}
                  </span>
                  <span className="experiences__best-time">
                    <i className="icon" data-icon="calendar"></i>
                    {experiences[activeExperience].bestTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Information */}
            <div className="experiences__info">
              <div className="experiences__info-header">
                <h3 className="experiences__name">
                  {experiences[activeExperience].title}
                </h3>
                <p className="experiences__subtitle-text">
                  {experiences[activeExperience].subtitle}
                </p>
              </div>

              <p className="experiences__description-text">
                {experiences[activeExperience].description}
              </p>

              <div className="experiences__highlights">
                <h4 className="experiences__highlights-title">Lo que encontrarás:</h4>
                <ul className="experiences__highlights-list">
                  {experiences[activeExperience].highlights.map((highlight, index) => (
                    <li key={index} className="experiences__highlight">
                      <i className="experiences__highlight-icon" data-icon="check-circle"></i>
                      <span className="experiences__highlight-text">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="experiences__actions">
                <Button 
                  variant="primary"
                  size="large"
                  onClick={scrollToContact}
                  className="experiences__cta"
                >
                  Planear Esta Experiencia
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="experiences__facts">
          <h3 className="experiences__facts-title">¿Sabías que...?</h3>
          <div className="experiences__facts-grid">
            <div className="experiences__fact">
              <div className="experiences__fact-icon">
                <i className="icon" data-icon="tree"></i>
              </div>
              <div className="experiences__fact-content">
                <span className="experiences__fact-number">4%</span>
                <span className="experiences__fact-label">de la biodiversidad mundial se encuentra en Costa Rica</span>
              </div>
            </div>

            <div className="experiences__fact">
              <div className="experiences__fact-icon">
                <i className="icon" data-icon="fish"></i>
              </div>
              <div className="experiences__fact-content">
                <span className="experiences__fact-number">35</span>
                <span className="experiences__fact-label">especies de coral en el arrecife de Cahuita</span>
              </div>
            </div>

            <div className="experiences__fact">
              <div className="experiences__fact-icon">
                <i className="icon" data-icon="bird"></i>
              </div>
              <div className="experiences__fact-content">
                <span className="experiences__fact-number">320+</span>
                <span className="experiences__fact-label">especies de aves observables en la región</span>
              </div>
            </div>

            <div className="experiences__fact">
              <div className="experiences__fact-icon">
                <i className="icon" data-icon="leaf"></i>
              </div>
              <div className="experiences__fact-content">
                <span className="experiences__fact-number">99%</span>
                <span className="experiences__fact-label">del territorio de Cahuita está protegido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences