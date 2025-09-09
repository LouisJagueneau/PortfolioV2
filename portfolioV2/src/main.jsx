import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/home.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollProgress>
    <Home/>
    </ScrollProgress>
  </StrictMode>,
)
