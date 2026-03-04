import React, { useState } from 'react'
import Button from '../ui/Button'
import './Rooms.css'

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(0)

  const rooms = [
    {
      id: 'bungalow-deluxe',
      name: 'Bungalow Deluxe',
      subtitle: 'Máximo Confort en la Naturaleza',
      price: '$120',
      period: 'por noche',
      capacity: '2-4 personas',
      area: '45 m²',
      description: 'Nuestro bungalow más espacioso, perfecto para parejas o familias pequeñas. Cuenta con una amplia terraza privada con vista al jardín tropical.',
      features: [
        'Cama king size o dos camas queen',
        'Aire acondicionado y ventiladores',
        'Terraza privada con hamaca',
        'Baño privado con ducha de lluvia',
        'Mini refrigerador',
        'Caja fuerte',
        'WiFi gratuito',
        'Vista al jardín tropical'
      ],
      images: [
        '/assets/images/rooms/bungalow-deluxe-exterior.jpg',
        '/assets/images/rooms/bungalow-deluxe-interior.jpg',
        '/assets/images/rooms/bungalow-deluxe-terrace.jpg'
      ]
    },
    {
      id: 'cabina-estandar',
      name: 'Cabaña Estándar',
      subtitle: 'Comodidad y Autenticidad',
      price: '$85',
      period: 'por noche',
      capacity: '2 personas',
      area: '30 m²',
      description: 'Acogedora cabaña con el encanto rústico caribeño. Ideal para viajeros que buscan una experiencia auténtica sin renunciar al confort.',
      features: [
        'Cama queen size',
        'Ventiladores de techo',
        'Terraza con vista al jardín',
        'Baño privado',
        'Mosquitero',
        'Área de estar',
        'WiFi gratuito',
        'Decoración local artesanal'
      ],
      images: [
        '/assets/images/rooms/cabina-standard-exterior.jpg',
        '/assets/images/rooms/cabina-standard-interior.jpg',
        '/assets/images/rooms/cabina-standard-bathroom.jpg'
      ]
    },
    {
      id: 'suite-familiar',
      name: 'Suite Familiar',
      subtitle: 'Espacio Para Toda la Familia',
      price: '$180',
      period: 'por noche',
      capacity: '4-6 personas',
      area: '65 m²',
      description: 'Amplia suite diseñada especialmente para familias, con múltiples espacios y todas las comodidades necesarias para una estadía memorable.',
      features: [
        'Habitación principal con cama king',
        'Habitación secundaria con literas',
        'Sala de estar con sofá cama',
        'Aire acondicionado en ambas habitaciones',
        'Terraza amplia con mesa de comedor',
        'Dos baños completos',
        'Kitchenette equipada',
        'WiFi gratuito'
      ],
      images: [
        '/assets/images/rooms/suite-familiar-exterior.jpg',
        '/assets/images/rooms/suite-familiar-living.jpg',
        '/assets/images/rooms/suite-familiar-bedroom.jpg'
      ]
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
    <section id="rooms" className="rooms">
      <div className="rooms__container">
        {/* Section Header */}
        <div className="rooms__header">
          <span className="rooms__subtitle">Nuestro Alojamiento</span>
          <h2 className="rooms__title">
            Habitaciones Diseñadas para tu
            <span className="rooms__title--highlight"> Comodidad</span>
          </h2>
          <p className="rooms__description">
            Cada una de nuestras habitaciones ha sido cuidadosamente diseñada 
            para ofrecerte el máximo confort while manteniéndote conectado con 
            la belleza natural del Caribe costarricense.
          </p>
        </div>

        {/* Room Selector */}
        <div className="rooms__selector">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              className={`rooms__selector-item ${selectedRoom === index ? 'rooms__selector-item--active' : ''}`}
              onClick={() => setSelectedRoom(index)}
            >
              <span className="rooms__selector-name">{room.name}</span>
              <span className="rooms__selector-price">{room.price}</span>
            </button>
          ))}
        </div>

        {/* Selected Room Detail */}
        <div className="rooms__detail">
          <div className="rooms__detail-content">
            {/* Room Images */}
            <div className="rooms__images">
              <div className="rooms__image-main">
                <img
                  src={rooms[selectedRoom].images[0]}
                  alt={`${rooms[selectedRoom].name} - Vista principal`}
                  className="rooms__img"
                />
              </div>
              <div className="rooms__image-grid">
                {rooms[selectedRoom].images.slice(1).map((image, index) => (
                  <div key={index} className="rooms__image-thumbnail">
                    <img
                      src={image}
                      alt={`${rooms[selectedRoom].name} - Vista ${index + 2}`}
                      className="rooms__img-thumb"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Room Information */}
            <div className="rooms__info">
              <div className="rooms__info-header">
                <h3 className="rooms__name">{rooms[selectedRoom].name}</h3>
                <span className="rooms__subtitle-text">{rooms[selectedRoom].subtitle}</span>
                <div className="rooms__pricing">
                  <span className="rooms__price">{rooms[selectedRoom].price}</span>
                  <span className="rooms__period">{rooms[selectedRoom].period}</span>
                </div>
              </div>

              {/* Room Specs */}
              <div className="rooms__specs">
                <div className="rooms__spec">
                  <i className="rooms__spec-icon" data-icon="users"></i>
                  <span className="rooms__spec-text">{rooms[selectedRoom].capacity}</span>
                </div>
                <div className="rooms__spec">
                  <i className="rooms__spec-icon" data-icon="maximize"></i>
                  <span className="rooms__spec-text">{rooms[selectedRoom].area}</span>
                </div>
              </div>

              {/* Description */}
              <p className="rooms__description-text">
                {rooms[selectedRoom].description}
              </p>

              {/* Features */}
              <div className="rooms__features">
                <h4 className="rooms__features-title">Incluye:</h4>
                <ul className="rooms__features-list">
                  {rooms[selectedRoom].features.map((feature, index) => (
                    <li key={index} className="rooms__feature">
                      <i className="rooms__feature-icon" data-icon="check"></i>
                      <span className="rooms__feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rooms__actions">
                <Button 
                  variant="primary"
                  size="large"
                  onClick={scrollToContact}
                  className="rooms__cta"
                >
                  Reservar Esta Habitación
                </Button>
                <Button 
                  variant="secondary"
                  size="medium"
                  onClick={scrollToContact}
                  className="rooms__inquiry"
                >
                  Consultar Disponibilidad
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms