import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Reducer from './components/reducer/Reducer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reducer />
  </StrictMode>,
)
