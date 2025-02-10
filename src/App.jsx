import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Reference from './components/Reference';
import FavoriteProducts from './components/FavoriteProducts'
import HomeProduct from './components/HomeProduct';
import Maps from './components/Maps';
import Box from "@mui/material/Box";


function App() {


  return (
    <>


<Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Sayfanın tam yüksekliği kadar alan kaplasın
        gap: 4, // Bileşenler arası boşluk
      }}
    >
      <Header />
      <Banner />
      <HomeProduct />
      <FavoriteProducts/>
      <Reference/>
      <Maps/>
      <Footer />
      
    </Box>

    </>
  )
}

export default App






