import { Grid, Box, Typography, Button } from "@mui/material";
import Banner_images from '../assets/images/ar-grup-banner.png'


function Banner() {
  return (
    <Grid container sx={{ height: "580px", paddingTop:"50px" }}>
      {/* Sol Kısım - Resim */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundImage: `url(${Banner_images})`, // Resminizi buraya ekleyin
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "300px", md: "100%" }, // Mobilde yükseklik ayarı
            width: "100%",
          }}
        />
      </Grid>

      {/* Sağ Kısım - Başlık, Yazı ve Buton */}
      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "start" }}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          AG GRUP İnşaat Malzemeleri!
          </Typography>
          
          <Typography variant="h6" sx={{ marginBottom: 4, fontWeight:400, paddingRight:2}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{color:"#fff"}}>
          Hakkımızda
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Banner;
