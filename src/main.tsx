import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DefaultLayout from "../layouts/layout"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DefaultLayout>
      <App />
    </DefaultLayout>
  </StrictMode>,
)
