import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GridProvider } from './components/context/Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GridProvider>
    <App />
   </GridProvider>
  </React.StrictMode>,
)
