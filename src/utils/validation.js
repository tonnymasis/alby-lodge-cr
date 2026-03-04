/**
 * Utilidades para validación de formularios
 */

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida un número de teléfono costarricense
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} True si es válido
 */
export const isValidPhone = (phone) => {
  // Acepta formatos: +506 8438 1874, +50684381874, 8438 1874, 84381874
  const phoneRegex = /^(\+506\s?)?[0-9]{4}\s?[0-9]{4}$/
  const cleanPhone = phone.replace(/\D/g, '')
  
  // Debe tener 8 dígitos (sin código de país) o 11 dígitos (con +506)
  return cleanPhone.length === 8 || (cleanPhone.length === 11 && cleanPhone.startsWith('506'))
}

/**
 * Valida que una fecha sea futura
 * @param {string} date - Fecha en formato YYYY-MM-DD
 * @returns {boolean} True si es fecha futura
 */
export const isFutureDate = (date) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const inputDate = new Date(date)
  return inputDate >= today
}

/**
 * Valida que la fecha de checkout sea posterior al checkin
 * @param {string} checkin - Fecha de entrada
 * @param {string} checkout - Fecha de salida
 * @returns {boolean} True si checkout es posterior
 */
export const isValidDateRange = (checkin, checkout) => {
  const checkinDate = new Date(checkin)
  const checkoutDate = new Date(checkout)
  return checkoutDate > checkinDate
}

/**
 * Limpia y formatea un número de teléfono
 * @param {string} phone - Número de teléfono
 * @returns {string} Teléfono formateado
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length === 8) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4)}`
  }
  
  if (cleaned.length === 11 && cleaned.startsWith('506')) {
    const localNumber = cleaned.slice(3)
    return `+506 ${localNumber.slice(0, 4)} ${localNumber.slice(4)}`
  }
  
  return phone
}