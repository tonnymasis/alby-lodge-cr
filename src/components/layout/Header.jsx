import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav__container">
          {/* Logo */}
          <Link to="/" className="nav__logo" onClick={() => scrollToSection('hero')}>
            <img 
              src="/assets/images/alby-lodge-logo.svg" 
              alt="Alby Lodge Logo" 
              className="nav__logo-img"
            />
            <span className="nav__logo-text">Alby Lodge</span>
          </Link>

          {/* Navigation Menu */}
          <div className={`nav__menu ${isMenuOpen ? 'nav__menu--open' : ''}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <button 
                  className="nav__link"
                  onClick={() => scrollToSection('about')}
                >
                  Sobre Nosotros
                </button>
              </li>
              <li className="nav__item">
                <button 
                  className="nav__link"
                  onClick={() => scrollToSection('rooms')}
                >
                  Habitaciones
                </button>
              </li>
              <li className="nav__item">
                <button 
                  className="nav__link"
                  onClick={() => scrollToSection('services')}
                >
                  Servicios
                </button>
              </li>
              <li className="nav__item">
                <button 
                  className="nav__link"
                  onClick={() => scrollToSection('experiences')}
                >
                  Experiencias
                </button>
              </li>
              <li className="nav__item">
                <button 
                  className="nav__link"
                  onClick={() => scrollToSection('gallery')}
                >
                  Galería
                </button>
              </li>
              <li className="nav__item">
                <button 
                  className="nav__link"
                  onClick={() => scrollToSection('contact')}
                >
                  Contacto
                </button>
              </li>
              <li className="nav__item nav__item--cta">
                <button 
                  className="nav__link nav__link--cta"
                  onClick={() => scrollToSection('contact')}
                >
                  Reservar Ahora
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`nav__toggle ${isMenuOpen ? 'nav__toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="nav__toggle-line"></span>
            <span className="nav__toggle-line"></span>
            <span className="nav__toggle-line"></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header