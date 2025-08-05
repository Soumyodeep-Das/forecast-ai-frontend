import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { registerSW } from 'virtual:pwa-register'

// 👉 React Query imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 👉 Create the client
const queryClient = new QueryClient()

// Register service worker
registerSW({
  onNeedRefresh() {
    console.log("New version available!");
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
  },
})

// Render the app with QueryClientProvider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
