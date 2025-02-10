
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';

import "./App.css";

import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

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
      ><Header/>
       
        <Box sx={{ flex: 1 }}> 
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Box>
      </Box>
    </>
  );
}

export default App;
