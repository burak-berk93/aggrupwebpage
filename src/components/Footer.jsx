import React from "react";
import { Box, Container, Typography, Stack, IconButton, Link } from "@mui/material";
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
              My Website
            </Typography>
          </Box>

          {/* 2. Bölüm - Linkler (Ana Sayfa, Hakkımızda vb.) */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Sayfalar</Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" underline="none">Ana Sayfa</Link>
              <Link href="/about" color="inherit" underline="none">Hakkımızda</Link>
              <Link href="/services" color="inherit" underline="none">Hizmetler</Link>
              <Link href="/contact" color="inherit" underline="none">İletişim</Link>
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
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <FaFacebookF size={20} />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <FaTwitter size={20} />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <FaInstagram size={20} />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <FaLinkedinIn size={20} />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        {/* Alt Kısım - Telif Hakkı */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            © {new Date().getFullYear()} My Website. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
