import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import './index.css'
import App from './App.jsx'

Sentry.init({
  dsn: "https://29f7eeb6432315e18bd2ddbc67d345a1@o4511717543706624.ingest.de.sentry.io/4511717548556368",
  integrations: [],
  tracesSampleRate: 0.1,
  // Keep captured data within what the privacy policy describes (error
  // reports for debugging only): no auto-populated user fields, no HTTP
  // body capture if a tracing/HTTP integration is ever added later.
  dataCollection: {
    userInfo: false,
    httpBodies: [],
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
