import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'Todo', icon: 'grid' },
    { id: 'rooms', name: 'Habitaciones', icon: 'bed' },
    { id: 'nature', name: 'Naturaleza', icon: 'tree' },
    { id: 'activities', name: 'Actividades', icon: 'activity' },
    { id: 'food', name: 'Gastronomía', icon: 'utensils' }
  ]

  const images = [
    {
      id: 1,
      src: '/assets/images/gallery/lodge-exterior-morning.jpg',
      alt: 'Vista matutina del lodge principal',
      category: 'rooms',
      title: 'Lodge Principal',
      description: 'Vista del edificio principal al amanecer'
    },
    {
      id: 2,
      src: '/assets/images/gallery/cahuita-beach-sunset.jpg',
      alt: 'Atardecer en Playa Cahuita',
      category: 'nature',
      title: 'Atardecer Caribeño',
      description: 'Espectacular puesta de sol en Playa Cahuita'
    },
    {
      id: 3,
      src: '/assets/images/gallery/bungalow-terrace-detail.jpg',
      alt: 'Terraza privada de bungalow',
      category: 'rooms',
      title: 'Terraza Privada',
      description: 'Rincón perfecto para relajarse'
    },
    {
      id: 4,
      src: '/assets/images/gallery/sloth-tree-canopy.jpg',
      alt: 'Perezoso en el dosel del bosque',
      category: 'nature',
      title: 'Vida Silvestre',
      description: 'Perezoso de tres dedos en su hábitat natural'
    },
    {
      id: 5,
      src: '/assets/images/gallery/snorkeling-coral-reef.jpg',
      alt: 'Snorkeling en arrecife de coral',
      category: 'activities',
      title: 'Snorkeling',
      description: 'Explorando el arrecife de coral de Cahuita'
    },
    {
      id: 6,
      src: '/assets/images/gallery/caribbean-breakfast-spread.jpg',
      alt: 'Desayuno caribeño tradicional',
      category: 'food',
      title: 'Desayuno Caribeño',
      description: 'Sabores auténticos para empezar el día'
    },
    {
      id: 7,
      src: '/assets/images/gallery/tropical-garden-path.jpg',
      alt: 'Sendero en jardín tropical',
      category: 'nature',
      title: 'Jardines Tropicales',
      description: 'Senderos rodeados de exuberante vegetación'
    },
    {
      id: 8,
      src: '/assets/images/gallery/suite-interior-cozy.jpg',
      alt: 'Interior acogedor de suite familiar',
      category: 'rooms',
      title: 'Suite Familiar',
      description: 'Espacios diseñados para tu comodidad'
    },
    {
      id: 9,
      src: '/assets/images/gallery/howler-monkey-canopy.jpg',
      alt: 'Mono congo en las copas de los árboles',
      category: 'nature',
      title: 'Mono Congo',
      description: 'Avistamiento matutino de mono aullador'
    },
    {
      id: 10,
      src: '/assets/images/gallery/kayaking-mangroves.jpg',
      alt: 'Kayak entre manglares',
      category: 'activities',
      title: 'Kayak en Manglares',
      description: 'Aventura tranquila por ecosistemas únicos'
    },
    {
      id: 11,
      src: '/assets/images/gallery/fresh-coconut-drink.jpg',
      alt: 'Agua de coco fresca',
      category: 'food',
      title: 'Coco Fresco',
      description: 'Refrescante bebida natural directamente del árbol'
    },
    {
      id: 12,
      src: '/assets/images/gallery/toucan-colorful-bird.jpg',
      alt: 'Tucán colorido en rama',
      category: 'nature',
      title: 'Tucán Pico Iris',
      description: 'Ave emblemática de Costa Rica'
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory)

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        {/* Section Header */}
        <div className="gallery__header">
          <span className="gallery__subtitle">Nuestra Galería</span>
          <h2 className="gallery__title">
            Momentos que Capturan la
            <span className="gallery__title--highlight"> Esencia de Alby Lodge</span>
          </h2>
          <p className="gallery__description">
            Cada imagen cuenta una historia de tranquilidad, naturaleza y 
            experiencias auténticas. Descubre los rincones especiales que 
            hacen de nuestro lodge un destino único.
          </p>
        </div>

        {/* Category Filter */}
        <div className="gallery__filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`gallery__filter ${selectedCategory === category.id ? 'gallery__filter--active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <i className="gallery__filter-icon" data-icon={category.icon}></i>
              <span className="gallery__filter-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="gallery__grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`gallery__item gallery__item--${index % 3 === 0 ? 'large' : 'small'}`}
              onClick={() => openLightbox(image)}
            >
              <div className="gallery__image">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery__img"
                />
                <div className="gallery__overlay">
                  <div className="gallery__overlay-content">
                    <h3 className="gallery__item-title">{image.title}</h3>
                    <p className="gallery__item-description">{image.description}</p>
                    <button className="gallery__view-btn">
                      <i className="icon" data-icon="maximize"></i>
                      Ver imagen completa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="gallery__stats">
          <div className="gallery__stat">
            <span className="gallery__stat-number">{images.length}</span>
            <span className="gallery__stat-label">Imágenes en galería</span>
          </div>
          <div className="gallery__stat">
            <span className="gallery__stat-number">5</span>
            <span className="gallery__stat-label">Categorías</span>
          </div>
          <div className="gallery__stat">
            <span className="gallery__stat-number">∞</span>
            <span className="gallery__stat-label">Momentos únicos</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery__lightbox" onClick={closeLightbox}>
          <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery__lightbox-close" onClick={closeLightbox}>
              <i className="icon" data-icon="x"></i>
            </button>
            
            <button className="gallery__lightbox-nav gallery__lightbox-prev" onClick={prevImage}>
              <i className="icon" data-icon="chevron-left"></i>
            </button>
            
            <button className="gallery__lightbox-nav gallery__lightbox-next" onClick={nextImage}>
              <i className="icon" data-icon="chevron-right"></i>
            </button>

            <div className="gallery__lightbox-image">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="gallery__lightbox-img"
              />
            </div>

            <div className="gallery__lightbox-info">
              <h3 className="gallery__lightbox-title">{selectedImage.title}</h3>
              <p className="gallery__lightbox-description">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery