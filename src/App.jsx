
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';

import "./App.css";

import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Product from "./pages/Product";

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
        </Routes>
      </Box>
      </Box>
    </>
  );
}

export default App;
