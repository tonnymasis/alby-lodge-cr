import { useState, useEffect } from 'react'

/**
 * Hook para manejar el scroll y detectar cuando el usuario hace scroll
 * Útil para cambiar el estilo del header, mostrar botón "volver arriba", etc.
 * 
 * @param {number} threshold - Píxeles de scroll para activar el estado
 * @returns {Object} { scrollY, isScrolled }
 */
export const useScroll = (threshold = 50) => {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > threshold)
    }

    // Set initial values
    handleScroll()

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { scrollY, isScrolled }
}