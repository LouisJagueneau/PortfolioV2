import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home.jsx'
import Contact from './pages/Contacts.jsx'
import Projects from './pages/Projects.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import i18n from './i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollProgress>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </ScrollProgress>
    </BrowserRouter>
  </StrictMode>,
)
