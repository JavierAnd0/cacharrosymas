import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InicioPage from '../src/assets/Pages/InicioPage'
import ProductosPage from '../src/assets/Pages/ProductosPage.jsx'
import SobreNosotrosPage from '../src/assets/Pages/SobreNosotrosPage.jsx'
import ContactanosPage from '../src/assets/Pages/ContactanosPage.jsx'
import LogeoPage from '../src/assets/Pages/LogeoPage.jsx'
import RegistroPage from '../src/assets/Pages/RegistroPage.jsx'


function App  ()  {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/Productos" element={<ProductosPage />} />
      <Route path="/Sobre-nosotros" element={<SobreNosotrosPage />} />
      <Route path="/Contactanos" element={<ContactanosPage />} />
      <Route path="/Logeo" element={<LogeoPage />} />
      <Route path="/Registro" element={<RegistroPage />} />
    </Routes>
  )
}

export default App;