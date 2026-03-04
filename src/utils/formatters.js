/**
 * Utilidades para formateo de datos
 */

/**
 * Formatea una fecha en español
 * @param {Date|string} date - Fecha a formatear
 * @returns {string} Fecha formateada
 */
export const formatDate = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  return dateObj.toLocaleDateString('es-CR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Formatea un precio en colones costarricenses
 * @param {number} amount - Cantidad a formatear
 * @param {string} currency - Moneda (USD o CRC)
 * @returns {string} Precio formateado
 */
export const formatPrice = (amount, currency = 'USD') => {
  const currencySymbols = {
    USD: '$',
    CRC: '₡'
  }
  
  const locales = {
    USD: 'en-US',
    CRC: 'es-CR'
  }
  
  return new Intl.NumberFormat(locales[currency], {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Convierte texto a formato de URL amigable
 * @param {string} text - Texto a convertir
 * @returns {string} Slug generado
 */
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD') // Descomponer caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '') // Remover diacríticos
    .replace(/[^a-z0-9 -]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios por guiones
    .replace(/-+/g, '-') // Remover guiones múltiples
    .trim()
}

/**
 * Trunca texto y añade puntos suspensivos
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}