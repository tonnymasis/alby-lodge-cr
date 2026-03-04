import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          {/* Footer Main Content */}
          <div className="footer__content">
            {/* Logo & Description */}
            <div className="footer__brand">
              <div className="footer__logo">
                <img 
                  src="/assets/images/alby-lodge-logo-white.svg" 
                  alt="Alby Lodge Logo" 
                  className="footer__logo-img"
                />
                <h3 className="footer__logo-text">Alby Lodge</h3>
              </div>
              <p className="footer__description">
                Descubre la magia del Caribe costarricense en nuestro acogedor lodge, 
                donde la naturaleza y el confort se encuentran para crear experiencias inolvidables.
              </p>
              
              {/* Social Media */}
              <div className="footer__social">
                <a 
                  href="https://facebook.com/albylodge" 
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="footer__social-icon" data-icon="facebook"></i>
                </a>
                <a 
                  href="https://instagram.com/albylodge" 
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="footer__social-icon" data-icon="instagram"></i>
                </a>
                <a 
                  href="https://wa.me/50612345678" 
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="footer__social-icon" data-icon="whatsapp"></i>
                </a>
                <a 
                  href="mailto:info@albylodge.com" 
                  className="footer__social-link"
                  aria-label="Email"
                >
                  <i className="footer__social-icon" data-icon="mail"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links">
              <h4 className="footer__title">Enlaces Rápidos</h4>
              <ul className="footer__link-list">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="footer__link"
                  >
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('rooms')}
                    className="footer__link"
                  >
                    Habitaciones
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="footer__link"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('experiences')}
                    className="footer__link"
                  >
                    Experiencias
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="footer__link"
                  >
                    Galería
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="footer__link"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__contact">
              <h4 className="footer__title">Contacto</h4>
              <div className="footer__contact-info">
                <div className="footer__contact-item">
                  <i className="footer__icon" data-icon="phone"></i>
                  <a href="tel:+50612345678">+506 1234 5678</a>
                </div>
                <div className="footer__contact-item">
                  <i className="footer__icon" data-icon="email"></i>
                  <a href="mailto:info@albylodge.com">info@albylodge.com</a>
                </div>
                <div className="footer__contact-item">
                  <i className="footer__icon" data-icon="whatsapp"></i>
                  <a href="https://wa.me/50612345678" target="_blank" rel="noopener noreferrer">
                    WhatsApp Reservas
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer__newsletter">
              <h4 className="footer__title">Newsletter</h4>
              <p className="footer__newsletter-text">
                Recibe ofertas especiales y noticias del lodge
              </p>
              <form className="footer__newsletter-form" onSubmit={(e) => {
                e.preventDefault()
                alert('¡Gracias por suscribirte!')
              }}>
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="footer__newsletter-input"
                  aria-label="Email para newsletter"
                />
                <button 
                  type="submit"
                  className="footer__newsletter-btn"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer__bottom">
            <div className="footer__bottom-content">
              <p className="footer__copyright">
                © {currentYear} Alby Lodge. Todos los derechos reservados.
              </p>
              <div className="footer__legal">
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    setShowPrivacy(true)
                  }}
                  className="footer__legal-link footer__legal-button"
                >
                  Política de Privacidad
                </button>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    setShowTerms(true)
                  }}
                  className="footer__legal-link footer__legal-button"
                >
                  Términos y Condiciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Política de Privacidad */}
      {showPrivacy && (
        <div className="modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Política de Privacidad</h2>
              <button 
                className="modal-close-btn"
                onClick={() => setShowPrivacy(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <h3>Información que Recopilamos</h3>
              <p>En Alby Lodge recopilamos la información necesaria para brindar nuestros servicios de hospedaje y mejorar su experiencia.</p>
              
              <h3>Uso de la Información</h3>
              <p>Utilizamos su información personal únicamente para procesar reservas, comunicarnos sobre su estadía y mejorar nuestros servicios.</p>
              
              <h3>Protección de Datos</h3>
              <p>Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>
              
              <h3>Contacto</h3>
              <p>Para consultas sobre esta política, contáctanos en info@albylodge.com</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Términos y Condiciones */}
      {showTerms && (
        <div className="modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Términos y Condiciones</h2>
              <button 
                className="modal-close-btn"
                onClick={() => setShowTerms(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <h3>Reservas y Cancelaciones</h3>
              <p>Las reservas requieren confirmación y pueden estar sujetas a políticas de cancelación específicas según el tipo de habitación.</p>
              
              <h3>Check-in y Check-out</h3>
              <p>Check-in: 15:00 hrs. Check-out: 11:00 hrs. Horarios especiales pueden acordarse con anticipación.</p>
              
              <h3>Responsabilidades del Huésped</h3>
              <p>Los huéspedes son responsables de cuidar las instalaciones y respetar las normas del lodge y del Parque Nacional Cahuita.</p>
              
              <h3>Política Ambiental</h3>
              <p>Promovemos el turismo sostenible. Pedimos a nuestros huéspedes colaborar con nuestros esfuerzos de conservación ambiental.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer