import { Routes, Route } from "react-router-dom"; // Router'ı import etmedik
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Header from './components/Header';
import "./App.css";

import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Kullanıcı bilgilerini alır
    });

    return () => unsubscribe();
  }, []);

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
        <Box sx={{ flex: 1 }}>
          {/* BrowserRouter'ı App.js içinde kullanmıyoruz */}
          <Routes>
            <Route path="/Login" element={user ? <Dashboard /> : <Login />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/About" element={<About />} />
            <Route path="/Order" element={<Order />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
