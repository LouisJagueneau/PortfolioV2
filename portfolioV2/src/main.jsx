import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Nav from './components/nav.jsx'
import Home from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
