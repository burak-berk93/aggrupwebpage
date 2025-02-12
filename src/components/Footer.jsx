import React from "react";
import { Box, Container, Typography, Stack, IconButton, Link as MuiLink } from "@mui/material"; 
import { Link } from "react-router-dom"; // React Router'dan Link import edildi
import logo from "../assets/images/aggrup-logo-white.svg";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // react-icons'dan sosyal medya ikonları

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#333", color: 'white', py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4} 
          justifyContent="space-between" 
          alignItems="flex-start"
        >
          {/* 1. Bölüm - Logo */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            <Box sx={{ paddingTop: 2, display: "flex", justifyContent: "flex-start" }}>
                  <img src={logo} alt="Logo" height="50" />
                </Box>
            </Typography>
          </Box>

          {/* 2. Bölüm - Linkler (Ana Sayfa, Hakkımızda vb.) */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Sayfalar</Typography>
            <Stack spacing={1}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Ana Sayfa</Link>
              <Link to="/Product" style={{ color: "inherit", textDecoration: "none" }}>Ürünler</Link>
              <Link to="/About" style={{ color: "inherit", textDecoration: "none" }}>Hakkımızda</Link>
              <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>İletişim</Link>
            </Stack>
          </Box>

          {/* 3. Bölüm - İletişim Bilgileri */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>İletişim</Typography>
            <Typography variant="body2">Adres: Örnek Mah. No: 123</Typography>
            <Typography variant="body2">Telefon: (123) 456-7890</Typography>
            <Typography variant="body2">E-posta: info@mywebsite.com</Typography>
          </Box>

          {/* 4. Bölüm - Sosyal Medya İkonları */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Sosyal Medya</Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton component={MuiLink} href="https://facebook.com" target="_blank" color="inherit">
                <FaFacebookF size={20} />
              </IconButton>
              <IconButton component={MuiLink} href="https://twitter.com" target="_blank" color="inherit">
                <FaTwitter size={20} />
              </IconButton>
              <IconButton component={MuiLink} href="https://instagram.com" target="_blank" color="inherit">
                <FaInstagram size={20} />
              </IconButton>
              <IconButton component={MuiLink} href="https://linkedin.com" target="_blank" color="inherit">
                <FaLinkedinIn size={20} />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        {/* Alt Kısım - Telif Hakkı */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            © {new Date().getFullYear()} Canboss Yazılım. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
