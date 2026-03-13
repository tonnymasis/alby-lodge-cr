import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 'tours-guided',
      title: 'Tours Guiados',
      icon: 'binoculars',
      description: 'Explora el Parque Nacional Cahuita con nuestros guías locales expertos.',
      features: [
        'Guías naturalistas certificados',
        'Observación de fauna y flora',
        'Senderos interpretativos',
        'Grupos pequeños personalizados'
      ]
    },
    {
      id: 'transportation',
      title: 'Transporte',
      icon: 'car',
      description: 'Servicio de transporte desde el aeropuerto y tours por la región.',
      features: [
        'Traslados aeropuerto-lodge',
        'Tours a playas cercanas',
        'Excursiones a volcanes',
        'Vehículos cómodos y seguros'
      ]
    },
    {
      id: 'activities',
      title: 'Actividades',
      icon: 'activity',
      description: 'Amplia gama de actividades para conectar con la naturaleza.',
      features: [
        'Snorkeling en arrecife coral',
        'Senderismo en selva tropical',
        'Observación de aves',
        'Kayak en manglares'
      ]
    },
    {
      id: 'dining',
      title: 'Restaurante',
      icon: 'utensils',
      description: 'Deliciosa gastronomía local e internacional con ingredientes frescos.',
      features: [
        'Cocina caribeña auténtica',
        'Ingredientes locales orgánicos',
        'Opciones vegetarianas/veganas',
        'Desayuno incluido'
      ]
    },
    {
      id: 'wellness',
      title: 'Bienestar',
      icon: 'leaf',
      description: 'Servicios de relajación y bienestar en armonía con la naturaleza.',
      features: [
        'Masajes terapéuticos',
        'Yoga matutino',
        'Meditación en jardín',
        'Tratamientos naturales'
      ]
    },
    {
      id: 'connectivity',
      title: 'Conectividad',
      icon: 'wifi',
      description: 'Mantente conectado mientras disfrutas de la desconexión natural.',
      features: [
        'WiFi gratuito en todo el lodge',
        'Centro de negocios',
        'Servicio de lavandería',
        'Caja fuerte digital'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services__container">
        {/* Section Header */}
        <div className="services__header">
          <span className="services__subtitle">Nuestros Servicios</span>
          <h2 className="services__title">
            Todo lo que Necesitas para una
            <span className="services__title--highlight"> Experiencia Completa</span>
          </h2>
          <p className="services__description">
            Desde el momento que llegas hasta tu partida, nos encargamos de 
            que cada detalle de tu estadía sea perfecto. Nuestros servicios 
            están diseñados para enriquecer tu conexión con la naturaleza.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="services__card">
              <div className="services__card-header">
                <div className="services__card-icon">
                  <i className="icon" data-icon={service.icon}></i>
                </div>
                <h3 className="services__card-title">{service.title}</h3>
              </div>
              
              <p className="services__card-description">
                {service.description}
              </p>

              <ul className="services__card-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="services__card-feature">
                    <i className="services__feature-icon" data-icon="check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Benefits */}
        <div className="services__benefits">
          <div className="services__benefits-content">
            <h3 className="services__benefits-title">¿Por qué elegir nuestros servicios?</h3>
            
            <div className="services__benefits-grid">
              <div className="services__benefit">
                <div className="services__benefit-icon">
                  <i className="icon" data-icon="award"></i>
                </div>
                <div className="services__benefit-content">
                  <h4 className="services__benefit-title">Expertos Locales</h4>
                  <p className="services__benefit-text">
                    Nuestros guías son nativos de la región con profundo conocimiento 
                    de la flora, fauna y cultura local.
                  </p>
                </div>
              </div>

              <div className="services__benefit">
                <div className="services__benefit-icon">
                  <i className="icon" data-icon="shield"></i>
                </div>
                <div className="services__benefit-content">
                  <h4 className="services__benefit-title">Turismo Responsable</h4>
                  <p className="services__benefit-text">
                    Todos nuestros tours siguen principios de turismo sostenible 
                    y conservación ambiental.
                  </p>
                </div>
              </div>

              <div className="services__benefit">
                <div className="services__benefit-icon">
                  <i className="icon" data-icon="users"></i>
                </div>
                <div className="services__benefit-content">
                  <h4 className="services__benefit-title">Grupos Pequeños</h4>
                  <p className="services__benefit-text">
                    Mantenemos grupos reducidos para una experiencia más 
                    personalizada y menor impacto ambiental.
                  </p>
                </div>
              </div>

              <div className="services__benefit">
                <div className="services__benefit-icon">
                  <i className="icon" data-icon="clock"></i>
                </div>
                <div className="services__benefit-content">
                  <h4 className="services__benefit-title">Horarios Flexibles</h4>
                  <p className="services__benefit-text">
                    Adaptamos nuestros servicios a tus horarios y preferencias 
                    para maximizar tu experiencia.
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

export default Services