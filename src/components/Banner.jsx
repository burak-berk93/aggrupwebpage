import { Grid, Box, Typography, Button } from "@mui/material";
import Banner_images from '../assets/images/ar-grup-banner.png';
import { useNavigate } from "react-router-dom"; // React Router'dan useNavigate import edildi

function Banner() {
  const navigate = useNavigate(); // useNavigate hook'u kullanıldı

  return (
    <Grid container sx={{ height: "580px", paddingTop: "50px" }}>
      {/* Sol Kısım - Resim */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundImage: `url(${Banner_images})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "300px", md: "100%" }, // Mobilde yükseklik ayarı
            width: "100%",
          }}
        />
      </Grid>

      {/* Sağ Kısım - Başlık, Yazı ve Buton */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", md: "start" }, // Mobilde ortala
        }}
      >
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: { xs: "center", md: "flex-start" }, 
          maxWidth: "500px", 
          paddingX: 2 
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: "bold", 
              marginBottom: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" }, // Mobilde biraz küçült
            }}
          >
            AG GRUP İnşaat Malzemeleri!
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              marginBottom: 3, 
              fontWeight: 400, 
              fontSize: { xs: "1rem", md: "1.25rem" }, // Mobilde küçült
              paddingX: { xs: 2, md: 0 }, // Mobilde sağdan soldan padding ekle
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime mollitia, molestiae quas vel sint commodi repudiandae.
          </Typography>

          <Button 
            variant="contained" 
            onClick={() => navigate("/About")}
            color="primary" 
            size="large" 
            sx={{ 
              color: "#fff", 
              width: { xs: "100%", md: "auto" }, // Mobilde genişlet
              maxWidth: "250px" // Buton çok büyük olmasın
            }}
          >
            Hakkımızda
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Banner;
