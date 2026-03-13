import React, { useState } from 'react'
import Button from '../ui/Button'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'bungalow-deluxe',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Por favor ingresa tu nombre'
    if (!formData.email.trim()) return 'Por favor ingresa tu email'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Por favor ingresa un email válido'
    if (!formData.checkIn) return 'Por favor selecciona fecha de llegada'
    if (!formData.checkOut) return 'Por favor selecciona fecha de salida'
    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      return 'La fecha de salida debe ser posterior a la fecha de llegada'
    }
    return ''
  }

  const generateWhatsAppMessage = () => {
    const roomTypeNames = {
      'bungalow-deluxe': 'Bungalow Deluxe',
      'cabina-tropical': 'Cabaña Tropical', 
      'suite-caribe': 'Suite Caribe'
    }

    const checkInDate = new Date(formData.checkIn).toLocaleDateString('es-ES')
    const checkOutDate = new Date(formData.checkOut).toLocaleDateString('es-ES')
    
    let message = `🏨 *SOLICITUD DE RESERVA - ALBY LODGE*\n\n`
    message += `👤 *Información del huésped:*\n`
    message += `• Nombre: ${formData.name}\n`
    message += `• Email: ${formData.email}\n`
    if (formData.phone) message += `• Teléfono: ${formData.phone}\n`
    message += `\n📅 *Detalles de la reserva:*\n`
    message += `• Llegada: ${checkInDate}\n`
    message += `• Salida: ${checkOutDate}\n`
    message += `• Huéspedes: ${formData.guests} persona(s)\n`
    message += `• Habitación: ${roomTypeNames[formData.roomType]}\n`
    
    if (formData.message.trim()) {
      message += `\n💬 *Mensaje adicional:*\n${formData.message}\n`
    }
    
    message += `\n¡Espero su confirmación! 🌴`
    
    return encodeURIComponent(message)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setFormStatus(validationError)
      return
    }

    setIsLoading(true)
    setFormStatus('')

    try {
      // Generar mensaje de WhatsApp
      const whatsappMessage = generateWhatsAppMessage()
      const whatsappURL = `https://wa.me/50684381874?text=${whatsappMessage}`
      
      // Abrir WhatsApp
      window.open(whatsappURL, '_blank')
      
      // Mostrar mensaje de confirmación
      setFormStatus('¡Perfecto! Se ha abierto WhatsApp con tu solicitud de reserva. Solo envía el mensaje para completar tu reserva.')
      
      // Limpiar formulario después de un breve delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '2',
          roomType: 'bungalow-deluxe', 
          message: ''
        })
      }, 3000)
      
    } catch (error) {
      setFormStatus('Hubo un error al generar el mensaje. Por favor intenta nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  // Calcular fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0]
  
  // Calcular fecha mínima para check-out (día siguiente al check-in)
  const minCheckOut = formData.checkIn 
    ? new Date(new Date(formData.checkIn).getTime() + 86400000).toISOString().split('T')[0]
    : today

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        {/* Section Header */}
        <div className="contact__header">
          <span className="contact__subtitle">Reserva tu Estadía</span>
          <h2 className="contact__title">
            ¿Listo para Vivir la
            <span className="contact__title--highlight"> Experiencia Alby Lodge?</span>
          </h2>
          <p className="contact__description">
            Completa el formulario y nos pondremos en contacto contigo 
            para confirmar tu reserva y ayudarte a planificar tu estadía perfecta.
          </p>
        </div>

        <div className="contact__content">
          {/* Contact Form */}
          <div className="contact__form-section">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-grid">
                {/* Personal Information */}
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__label">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact__input"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact__input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="phone" className="contact__label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="contact__input"
                    placeholder="+506 8438 1874"
                  />
                </div>

                {/* Reservation Details */}
                <div className="contact__form-group">
                  <label htmlFor="checkIn" className="contact__label">
                    Fecha de llegada *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="contact__input"
                    min={today}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="checkOut" className="contact__label">
                    Fecha de salida *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="contact__input"
                    min={minCheckOut}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="guests" className="contact__label">
                    Número de huéspedes
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="contact__select"
                  >
                    <option value="1">1 huésped</option>
                    <option value="2">2 huéspedes</option>
                    <option value="3">3 huéspedes</option>
                    <option value="4">4 huéspedes</option>
                    <option value="5">5 huéspedes</option>
                    <option value="6">6 huéspedes</option>
                  </select>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="roomType" className="contact__label">
                    Tipo de habitación preferida
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="contact__select"
                  >
                    <option value="bungalow-deluxe">Bungalow Deluxe ($120/noche)</option>
                    <option value="cabina-estandar">Cabaña Estándar ($85/noche)</option>
                    <option value="suite-familiar">Suite Familiar ($180/noche)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="message" className="contact__label">
                  Mensaje adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact__textarea"
                  placeholder="Cuéntanos sobre tus planes, necesidades especiales, o cualquier pregunta que tengas..."
                  rows="4"
                ></textarea>
              </div>

              {/* Form Status */}
              {formStatus && (
                <div className={`contact__status ${formStatus.includes('Gracias') ? 'contact__status--success' : 'contact__status--error'}`}>
                  {formStatus}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isLoading}
                className="contact__submit"
              >
                {isLoading ? 'Enviando...' : 'Solicitar Reserva'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Información de Contacto</h3>
              
              <div className="contact__info-list">
                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <i className="icon" data-icon="phone"></i>
                  </div>
                  <div className="contact__info-content">
                    <strong>Teléfono</strong>
                    <a href="tel:+50684381874" className="contact__info-link">
                      +506 8438 1874
                    </a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <i className="icon" data-icon="message-circle"></i>
                  </div>
                  <div className="contact__info-content">
                    <strong>WhatsApp</strong>
                    <a 
                      href="https://wa.me/50684381874" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact__info-link"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <i className="icon" data-icon="mail"></i>
                  </div>
                  <div className="contact__info-content">
                    <strong>Email</strong>
                    <a href="mailto:info@albylodge.com" className="contact__info-link">
                      info@albylodge.com
                    </a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <i className="icon" data-icon="clock"></i>
                  </div>
                  <div className="contact__info-content">
                    <strong>Horario de Atención</strong>
                    <span>Lunes a Domingo: 7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="contact__quick-actions">
              <h4 className="contact__quick-title">Contacto Rápido</h4>
              <div className="contact__quick-buttons">
                <Button
                  variant="secondary"
                  size="medium"
                  onClick={() => window.open('https://wa.me/50684381874', '_blank')}
                  className="contact__quick-btn"
                >
                  <i className="icon" data-icon="message-circle"></i>
                  WhatsApp
                </Button>
                
                <Button
                  variant="secondary"
                  size="medium"
                  onClick={() => window.open('tel:+50684381874')}
                  className="contact__quick-btn"
                >
                  <i className="icon" data-icon="phone"></i>
                  Llamar
                </Button>

                <Button
                  variant="secondary"
                  size="medium"
                  onClick={() => window.open('mailto:info@albylodge.com')}
                  className="contact__quick-btn"
                >
                  <i className="icon" data-icon="mail"></i>
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact