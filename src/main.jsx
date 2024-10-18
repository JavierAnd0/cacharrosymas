import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../src/assets/Components/Header.jsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
