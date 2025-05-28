import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'
import CurrencyContextProvider from './context/CurrencyContext.jsx'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* <CurrencyContextProvider> */}
      <StrictMode>
        <App />
      </StrictMode>
      {/* </CurrencyContextProvider> */}
    </BrowserRouter>
  </QueryClientProvider>
)
