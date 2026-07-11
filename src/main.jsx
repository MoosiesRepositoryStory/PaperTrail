import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import './index.css'
import App from './App.jsx'

// TODO: paste the DSN from your Sentry project settings (sentry.io) here.
// Left blank, the SDK is a safe no-op — nothing is captured until this is set.
Sentry.init({
  dsn: "",
  integrations: [],
  tracesSampleRate: 0.1,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
