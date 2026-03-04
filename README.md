# Alby Lodge - Sitio Web Oficial

Sitio web oficial del lodge turístico Alby Lodge, ubicado en Cahuita, Costa Rica. Diseñado para mostrar nuestras habitaciones, servicios y la belleza natural del Caribe costarricense.

## 🌴 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Experiencia de Usuario Moderna**: Interfaz limpia e intuitiva
- **Optimizado para SEO**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple con estándares de accesibilidad web
- **Formulario de Reservas**: Sistema de contacto integrado
- **Galería Interactiva**: Imágenes del lodge y experiencias
- **Mapa de Ubicación**: Información detallada de cómo llegar

## 🚀 Tecnologías Utilizadas

- **React 18**: Framework principal
- **Vite**: Herramientas de desarrollo y build
- **CSS Modules**: Estilos modulares y responsive
- **React Router**: Navegación entre páginas
- **JavaScript ES6+**: Funcionalidades modernas

## 📋 Prerequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 🔧 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/albylodge/website.git
   cd website
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y visita:
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
alby-lodge-website/
├── public/                 # Archivos estáticos
│   ├── assets/
│   │   └── images/        # Imágenes del sitio
│   └── index.html         # HTML principal
├── src/                   # Código fuente
│   ├── components/        # Componentes de React
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Hero, About, Rooms, etc.
│   │   └── ui/           # Componentes reutilizables
│   ├── pages/            # Páginas principales
│   ├── styles/           # Archivos CSS
│   ├── hooks/            # React hooks personalizados
│   ├── utils/            # Utilidades y helpers
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Punto de entrada
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
└── README.md            # Este archivo
```

## 💡 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`
Ejecuta la aplicación en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm run build`
Construye la aplicación para producción en la carpeta `dist`.
Optimiza React para el mejor rendimiento.

### `npm run preview`
Previsualiza la versión de producción localmente.

### `npm run lint`
Ejecuta ESLint para verificar problemas de código.

## 🌐 Despliegue

### Netlify (Recomendado)

1. **Conecta tu repositorio** en [Netlify](https://netlify.com)
2. **Configuración de build**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy automático**: Cada push a main despliega automáticamente

### Vercel

1. **Instala Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Despliega**:
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. **Instala gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Agrega script en package.json**:
   ```json
   "homepage": "https://tu-usuario.github.io/tu-repo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Despliega**:
   ```bash
   npm run deploy
   ```

## 🎨 Personalización

### Colores y Temas
Los colores principales se definen en `src/styles/index.css`:

```css
:root {
  --color-primary: #00B4B7;        /* Turquesa caribeño */
  --color-secondary: #FF6B35;      /* Naranja atardecer */
  --color-green: #4A7C59;          /* Verde naturaleza */
  /* ... más colores */
}
```

### Imágenes
Coloca tus imágenes en `public/assets/images/` y actualiza las rutas en los componentes.

### Contenido
Edita el contenido directamente en los componentes ubicados en `src/components/sections/`.

## 📱 Responsive Design

El sitio está optimizado para:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px en adelante

## ♿ Accesibilidad

- Navegación por teclado completa
- Textos alternativos en imágenes
- Contraste de colores apropiado
- Estructura semántica HTML5
- Soporte para lectores de pantalla

## 🔍 SEO Optimizado

- Meta tags dinámicos
- Estructura de datos Schema.org
- Sitemap.xml automático
- URLs amigables
- Optimización de imágenes

## 🐛 Solución de Problemas

### Error: Module not found
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado
```bash
# Usa un puerto diferente
npm run dev -- --port 3001
```

### Build falla
```bash
# Verifica las rutas de importación
npm run lint
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**Alby Lodge**
- 📧 Email: info@albylodge.com
- 📱 WhatsApp: +506 8438 1874
- 🌐 Web: https://albylodge.com
- 📍 Ubicación: Cahuita, Puerto Limón, Costa Rica

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Diseño inspirado en la belleza natural del Caribe costarricense
- Íconos y recursos gráficos de fuentes libres
- Comunidad de Cahuita por su hospitalidad

---

**¡Pura Vida! 🇨🇷**

Hecho con ❤️ para promover el turismo sostenible en Costa Rica.