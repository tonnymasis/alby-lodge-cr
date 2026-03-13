# Configuración de Google Maps para Alby Lodge

Este documento explica cómo configurar Google Maps en el sitio web de Alby Lodge.

## 🗺️ Configuración de la API de Google Maps

### Paso 1: Obtener una API Key de Google Maps

1. Ve a la [Consola de Google Cloud](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Navega a "APIs y Servicios" → "Biblioteca"
4. Busca y habilita las siguientes APIs:
   - **Maps JavaScript API**
   - **Places API** (opcional, para funcionalidades adicionales)
   - **Geocoding API** (opcional, para búsqueda de direcciones)

### Paso 2: Crear credenciales

1. Ve a "APIs y Servicios" → "Credenciales"
2. Haz clic en "Crear credenciales" → "Clave de API"
3. Copia la clave de API generada

### Paso 3: Configurar restricciones (Recomendado)

1. Haz clic en tu API key para editarla
2. En "Restricciones de la aplicación", selecciona "Referentes HTTP (sitios web)"
3. Agrega los dominios permitidos:
   - `localhost:*` (para desarrollo)
   - `*.albylodge.com` (para producción)
   - Tu dominio específico

### Paso 4: Configurar variables de entorno

1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edita el archivo `.env` y reemplaza la API key:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=tu_api_key_real_aquí
   ```

## 🚀 Desarrollo Local

Para desarrollar localmente con Google Maps:

1. Asegúrate de tener tu API key configurada en `.env`
2. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. El mapa debería aparecer correctamente en la sección de ubicación

## 📍 Funcionalidades del Mapa

El mapa incluye:
- **Ubicación exacta** de Alby Lodge (9.73489021769845, -82.83960511714805)
- **Marcador personalizado** con información del lodge
- **Ventana de información** con detalles de contacto
- **Controles de zoom** y navegación
- **Vista satelital** y de carreteras
- **Diseño responsive** para móviles

## 🛠️ Funcionalidades Implementadas

### Componente GoogleMap
- Carga asíncrona de la API de Google Maps
- Estados de carga y error con feedback visual
- Soporte para múltiples marcadores
- Ventanas de información personalizables
- Estilos CSS modernos y responsive

### Integración en Location
- Reemplazo del placeholder estático
- Coordenadas GPS actualizadas
- Información de contacto integrada
- Fallback graceful si la API no está disponible

## 🔧 Personalización

### Cambiar el estilo del mapa
Edita el archivo `src/components/ui/GoogleMap.jsx` y modifica la propiedad `styles`:

```javascript
styles: [
  {
    featureType: "poi.business",
    elementType: "labels.icon", 
    stylers: [{ visibility: "off" }]
  },
  // Agrega más estilos aquí
]
```

### Agregar más marcadores
Modifica el array `markers` en `src/components/sections/Location.jsx`:

```javascript
markers={[
  {
    position: { lat: 9.73489021769845, lng: -82.83960511714805 },
    title: 'Alby Lodge',
    infoWindow: '...'
  },
  // Agrega más marcadores aquí
]}
```

## 📊 Costos de la API

Google Maps ofrece $200 USD en créditos gratuitos mensuales. Para un sitio web típico:
- **Maps JavaScript API**: $7 por 1,000 cargas
- **Places API**: $17 por 1,000 solicitudes
- **Geocoding API**: $5 por 1,000 solicitudes

Para la mayoría de sitios web pequeños a medianos, los créditos gratuitos son suficientes.

## 🆘 Resolución de Problemas

### El mapa no se carga
1. Verifica que la API key esté correctamente configurada en `.env`
2. Asegúrate de que las APIs necesarias estén habilitadas
3. Revisa las restricciones de dominio
4. Verifica la consola del navegador por errores

### Mapa en gris
- Generalmente indica problemas con la API key
- Verifica que la facturación esté habilitada en Google Cloud
- Asegúrate de que Maps JavaScript API esté habilitada

### Errores de CORS
- Verifica que el dominio esté en las restricciones de referente
- Para desarrollo local, incluye `localhost:*`

## 📞 Soporte

Si necesitas ayuda con la configuración, contacta:
- **Teléfono**: +506 8438 1874
- **Email**: info@albylodge.com

---

**Nota**: Guarda tu API key de manera segura y nunca la compartas públicamente. El archivo `.env` está en `.gitignore` para evitar que se suba al repositorio.