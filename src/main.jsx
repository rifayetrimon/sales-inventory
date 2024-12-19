import { createRoot } from 'react-dom'
import { StrictMode } from 'react'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
