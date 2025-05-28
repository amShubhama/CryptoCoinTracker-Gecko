import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CoinTable from './components/CoinTable/CoinTable'
import { QueryClient } from '@tanstack/react-query'
import CoinDetails from './components/CoinDetails/CoinDetails'
import { Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
function App() {
  const queryClient = new QueryClient();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/coin_details' element={<CoinDetails />} />
    </Routes>
  )
}

export default App
