import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CoinTable from './components/CoinTable/CoinTable'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Banner />
      <CoinTable />
    </QueryClientProvider>
  )
}

export default App
