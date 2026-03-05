import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

// Detectar si estamos en GitHub Pages
const isGitHubPages = window.location.hostname === 'tonnymasis.github.io'
const basename = isGitHubPages ? '/alby-lodge-cr' : '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)