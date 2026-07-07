import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Inject Google Fonts into document head
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Aboreto&family=Fraunces:opsz,SOFT,WONK,wght@9..144,0..100,0..1,100..900&family=DM+Sans:opsz,wght@9..40,100..900&family=Lora:wght@400..700&display=swap'
document.head.appendChild(link)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
