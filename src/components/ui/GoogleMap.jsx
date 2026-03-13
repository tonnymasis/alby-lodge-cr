import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './GoogleMap.css';

const GoogleMap = ({
  apiKey,
  center,
  zoom = 15,
  markers = [],
  className = '',
  height = '400px',
  backgroundColor = '#e5e7eb'
}) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiKey) {
      setError('Google Maps API key is required');
      setIsLoading(false);
      return;
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["places"]
    });

    loader
      .importLibrary("maps")
      .then(({ Map }) => {
        const mapInstance = new Map(mapRef.current, {
          center: center,
          zoom: zoom,
          mapTypeId: 'roadmap',
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: false,
          fullscreenControl: true,
          styles: [
            {
              featureType: "poi.business",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        setMap(mapInstance);
        setIsLoading(false);

        // Agregar marcadores
        markers.forEach(marker => {
          loader.importLibrary("marker").then(({ AdvancedMarkerElement }) => {
            const markerElement = new AdvancedMarkerElement({
              map: mapInstance,
              position: marker.position,
              title: marker.title
            });

            if (marker.infoWindow) {
              loader.importLibrary("maps").then(() => {
                const infoWindow = new google.maps.InfoWindow({
                  content: marker.infoWindow
                });

                markerElement.addListener('click', () => {
                  infoWindow.open(mapInstance, markerElement);
                });
              });
            }
          });
        });
      })
      .catch((error) => {
        console.error('Error loading Google Maps:', error);
        setError('Error al cargar el mapa. Por favor, intenta más tarde.');
        setIsLoading(false);
      });
  }, [apiKey, center.lat, center.lng, zoom, markers]);

  if (error) {
    return (
      <div 
        className={`google-map-error ${className}`} 
        style={{ height, backgroundColor }}
      >
        <div className="google-map-error-content">
          <div className="google-map-error-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h3>Mapa no disponible</h3>
          <p>{error}</p>
          <div className="google-map-fallback-info">
            <strong>Alby Lodge</strong><br/>
            Cahuita, Puerto Limón, Costa Rica<br/>
            9.73489°N, 82.83961°W
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`google-map-container ${className}`} style={{ height }}>
      {isLoading && (
        <div className="google-map-loading" style={{ backgroundColor }}>
          <div className="google-map-spinner">
            <div className="spinner"></div>
          </div>
          <p>Cargando mapa...</p>
        </div>
      )}
      <div
        ref={mapRef}
        className="google-map"
        style={{ 
          height: '100%', 
          width: '100%',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  );
};

export default GoogleMap;