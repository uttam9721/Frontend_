import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppState from './context/AppState'   // ✅ import your provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppState>     {/* ✅ Wrap App inside AppState */}
      <App />
    </AppState>
  </StrictMode>
)
