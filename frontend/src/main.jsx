import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TrainingContextProvider } from './context/TrainingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrainingContextProvider>
      <App />
    </TrainingContextProvider>
  </React.StrictMode>,
)
