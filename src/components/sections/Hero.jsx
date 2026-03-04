import React from 'react'
import Button from '../ui/Button'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToRooms = () => {
    const element = document.getElementById('rooms')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <div className="hero__image">
          <img 
            src="./assets/images/hero-lodge-main.png" 
            alt="Alby Lodge - Vista principal del lodge en Cahuita"
            className="hero__bg-img"
          />
        </div>
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          {/* Main Heading */}
          <div className="hero__text">
            <span className="hero__subtitle">Bienvenido al paraíso caribeño</span>
            <h1 className="hero__title">
              Descubre la magia de
              <span className="hero__title--highlight"> Alby Lodge</span>
            </h1>
            <p className="hero__description">
              Sumérgete en la tranquilidad de la costa caribeña de Costa Rica. 
              Nuestro acogedor lodge te ofrece una experiencia auténtica rodeado 
              de la exuberante naturaleza del Parque Nacional Cahuita.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero__actions">
            <Button 
              variant="primary"
              size="large"
              onClick={scrollToContact}
              className="hero__cta-primary"
            >
              Reservar Ahora
            </Button>
            <Button 
              variant="secondary"
              size="large"
              onClick={scrollToRooms}
              className="hero__cta-secondary"
            >
              Ver Habitaciones
            </Button>
          </div>

          {/* Key Features */}
          <div className="hero__features">
            <div className="hero__feature">
              <div className="hero__feature-icon">
                <i className="icon" data-icon="leaf"></i>
              </div>
              <span className="hero__feature-text">Ecoturismo</span>
            </div>
            <div className="hero__feature">
              <div className="hero__feature-icon">
                <i className="icon" data-icon="bed"></i>
              </div>
              <span className="hero__feature-text">Comfort Natural</span>
            </div>
            <div className="hero__feature">
              <div className="hero__feature-icon">
                <i className="icon" data-icon="map"></i>
              </div>
              <span className="hero__feature-text">Cerca del Parque</span>
            </div>
            <div className="hero__feature">
              <div className="hero__feature-icon">
                <i className="icon" data-icon="waves"></i>
              </div>
              <span className="hero__feature-text">Playa Caribe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <button 
          className="hero__scroll-btn"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to next section"
        >
          <span className="hero__scroll-text">Descubre más</span>
          <div className="hero__scroll-icon">
            <i className="icon" data-icon="arrow-down"></i>
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero