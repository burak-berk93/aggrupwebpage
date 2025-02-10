import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import aboutImage from '../assets/images/hakkimizda.jpg'



function About() {
  return (
    <Container maxWidth="lg">
      {/* Hero Banner */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "401px",
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Typography variant="h3" color="white" sx={{ background: "rgba(0, 0, 0, 0.6)", p: 2, borderRadius: "8px" }}>
          Biz Kimiz?
        </Typography>
      </Box>

      {/* Şirket Bilgisi */}
      <Typography variant="h4" textAlign="center" color="primary" gutterBottom>
        Hakkımızda
      </Typography>
      <Typography variant="body1" textAlign="center" color="textSecondary" paragraph>
        Aggrup olarak müşteri odaklı, yenilikçi ve kaliteli ürünler sunmayı amaçlıyoruz.
        Teknolojiye yatırım yaparak büyümeye ve sektörde öncü olmaya devam ediyoruz.
      </Typography>

      {/* 3 Kart ile Şirket Bilgisi */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <BusinessIcon color="primary" sx={{ fontSize: 60 }} />
              <Typography variant="h6" mt={2}>
                Kurumsal Güç
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Güçlü altyapımız ve uzman ekibimizle hizmet veriyoruz.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <GroupsIcon color="primary" sx={{ fontSize: 60 }} />
              <Typography variant="h6" mt={2}>
                Ekip Ruhu
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Çalışanlarımız bizim en büyük değerimizdir.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <EmojiObjectsIcon color="primary" sx={{ fontSize: 60 }} />
              <Typography variant="h6" mt={2}>
                Yenilikçilik
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Teknoloji ve inovasyonla sektöre yön veriyoruz.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Misyon & Vizyon */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Misyonumuz & Vizyonumuz
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Müşterilerimize en kaliteli ürünleri sunarak, sürekli gelişimi hedefliyoruz.
        </Typography>
      </Box>
    </Container>
    
  );
}

export default About;
