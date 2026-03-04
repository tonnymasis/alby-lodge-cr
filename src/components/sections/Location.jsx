import React from 'react'
import './Location.css'

const Location = () => {
  const nearbyAttractions = [
    {
      name: 'Parque Nacional Cahuita',
      distance: '5 min caminando',
      type: 'Naturaleza',
      description: 'Acceso directo a senderos y playas del parque nacional'
    },
    {
      name: 'Playa Cahuita',
      distance: '3 min caminando',
      type: 'Playa',
      description: 'Playa de arena blanca con aguas cristalinas para snorkel'
    },
    {
      name: 'Centro de Cahuita',
      distance: '2 min caminando',
      type: 'Pueblo',
      description: 'Restaurantes, tiendas y cultura local auténtica'
    },
    {
      name: 'Playa Negra',
      distance: '10 min en auto',
      type: 'Playa',
      description: 'Famosa playa de arena volcánica, ideal para surf'
    },
    {
      name: 'Centro Jaguar Rescue',
      distance: '15 min en auto',
      type: 'Conservación',
      description: 'Centro de rescate de animales silvestres'
    },
    {
      name: 'Puerto Viejo',
      distance: '20 min en auto',
      type: 'Pueblo',
      description: 'Vibrante centro turístico con vida nocturna'
    }
  ]

  const transportationOptions = [
    {
      type: 'Aeropuerto Juan Santamaría (SJO)',
      duration: '4.5 horas en auto',
      description: 'Ofrecemos servicio de transporte privado desde el aeropuerto principal',
      price: 'Desde $180'
    },
    {
      type: 'Aeropuerto Limón',
      duration: '1 hora en auto',
      description: 'Aeropuerto regional más cercano con vuelos domésticos',
      price: 'Desde $45'
    },
    {
      type: 'Terminal de Autobuses San José',
      duration: '4 horas en autobús público',
      description: 'Opción económica con autobuses directos a Cahuita',
      price: 'Desde $8'
    },
    {
      type: 'Auto Rental',
      duration: 'A tu ritmo',
      description: 'Renta un vehículo y maneja por la hermosa ruta costera',
      price: 'Variable'
    }
  ]

  return (
    <section id="location" className="location">
      <div className="location__container">
        {/* Section Header */}
        <div className="location__header">
          <span className="location__subtitle">Nuestra Ubicación</span>
          <h2 className="location__title">
            En el Corazón del
            <span className="location__title--highlight"> Paraíso Caribeño</span>
          </h2>
          <p className="location__description">
            Estratégicamente ubicados en Cahuita, tenemos acceso privilegiado 
            a las mejores atracciones naturales del Caribe costarricense, 
            mientras disfrutas de la tranquilidad de nuestro entorno.
          </p>
        </div>

        <div className="location__content">
          {/* Map Section */}
          <div className="location__map-section">
            <div className="location__map">
              {/* Placeholder para mapa interactivo */}
              <div className="location__map-placeholder">
                <img 
                  src="./assets/images/location/cahuita-map-overview.svg"
                  alt="Mapa de ubicación de Alby Lodge en Cahuita"
                  className="location__map-img"
                />
                <div className="location__map-overlay">
                  <div className="location__map-marker">
                    <i className="icon" data-icon="map-pin"></i>
                    <span className="location__map-label">Alby Lodge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Contact */}
            <div className="location__details">
              <h3 className="location__details-title">Información de Ubicación</h3>
              
              <div className="location__address">
                <div className="location__address-item">
                  <i className="location__icon" data-icon="map-pin"></i>
                  <div className="location__address-content">
                    <strong>Dirección:</strong>
                    <span>Cahuita, Puerto Limón, Costa Rica</span>
                    <span>A 200m de la entrada del Parque Nacional</span>
                  </div>
                </div>

                <div className="location__address-item">
                  <i className="location__icon" data-icon="navigation"></i>
                  <div className="location__address-content">
                    <strong>Coordenadas GPS:</strong>
                    <span>9.7319° N, 82.8421° W</span>
                  </div>
                </div>

                <div className="location__address-item">
                  <i className="location__icon" data-icon="phone"></i>
                  <div className="location__address-content">
                    <strong>Teléfono:</strong>
                    <a href="tel:+50684381874">+506 8438 1874</a>
                  </div>
                </div>

                <div className="location__address-item">
                  <i className="location__icon" data-icon="mail"></i>
                  <div className="location__address-content">
                    <strong>Email:</strong>
                    <a href="mailto:info@albylodge.com">info@albylodge.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Attractions */}
          <div className="location__attractions">
            <h3 className="location__attractions-title">Qué hay cerca</h3>
            <div className="location__attractions-grid">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="location__attraction">
                  <div className="location__attraction-header">
                    <h4 className="location__attraction-name">{attraction.name}</h4>
                    <span className="location__attraction-type">{attraction.type}</span>
                  </div>
                  <div className="location__attraction-distance">
                    <i className="icon" data-icon="clock"></i>
                    <span>{attraction.distance}</span>
                  </div>
                  <p className="location__attraction-description">
                    {attraction.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="location__transportation">
            <h3 className="location__transportation-title">Cómo llegar</h3>
            <div className="location__transportation-grid">
              {transportationOptions.map((option, index) => (
                <div key={index} className="location__transport-option">
                  <div className="location__transport-header">
                    <h4 className="location__transport-type">{option.type}</h4>
                    <span className="location__transport-price">{option.price}</span>
                  </div>
                  <div className="location__transport-duration">
                    <i className="icon" data-icon="clock"></i>
                    <span>{option.duration}</span>
                  </div>
                  <p className="location__transport-description">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Benefits */}
          <div className="location__benefits">
            <h3 className="location__benefits-title">Ventajas de nuestra ubicación</h3>
            <div className="location__benefits-grid">
              <div className="location__benefit">
                <div className="location__benefit-icon">
                  <i className="icon" data-icon="shield"></i>
                </div>
                <div className="location__benefit-content">
                  <h4 className="location__benefit-title">Zona Segura</h4>
                  <p className="location__benefit-description">
                    Cahuita es conocida por ser una de las zonas más seguras 
                    del Caribe costarricense para turistas.
                  </p>
                </div>
              </div>

              <div className="location__benefit">
                <div className="location__benefit-icon">
                  <i className="icon" data-icon="leaf"></i>
                </div>
                <div className="location__benefit-content">
                  <h4 className="location__benefit-title">Naturaleza Protegida</h4>
                  <p className="location__benefit-description">
                    Estamos rodeados por áreas protegidas que garantizan 
                    la conservación del entorno natural.
                  </p>
                </div>
              </div>

              <div className="location__benefit">
                <div className="location__benefit-icon">
                  <i className="icon" data-icon="users"></i>
                </div>
                <div className="location__benefit-content">
                  <h4 className="location__benefit-title">Comunidad Acogedora</h4>
                  <p className="location__benefit-description">
                    Los habitantes locales son conocidos por su hospitalidad 
                    y calidez humana genuina.
                  </p>
                </div>
              </div>

              <div className="location__benefit">
                <div className="location__benefit-icon">
                  <i className="icon" data-icon="activity"></i>
                </div>
                <div className="location__benefit-content">
                  <h4 className="location__benefit-title">Centro de Actividades</h4>
                  <p className="location__benefit-description">
                    Punto de partida ideal para explorar múltiples 
                    atracciones y actividades de la región.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location