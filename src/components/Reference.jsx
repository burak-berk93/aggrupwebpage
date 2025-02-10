import Container from "@mui/material/Container";
import {  grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


import images3 from "../assets/images/El-Aletleri-ve-Makinalar.png";

function HomeProduct() {


  return (
    <Box sx={{ padding: "20px" }}>
      {/* Beyaz kutu (sadece büyük ekranlarda görünecek) */}
      <Container sx={{ display: { xs: "none", md: "block" } }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 2 }}
        >
          Referanslar
        </Typography>
        <Box sx={{ bgcolor: "white", padding: 4, borderRadius: 2 }}>
          <CardList />
        </Box>
      </Container>

      {/* Mobil için kartlar (beyaz kutu olmadan) */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <CardList />
      </Box>
    </Box>
  );
}

function CardList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Mobilde dikey, büyük ekranda yatay
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Kart 1 */}
      <Card
        sx={{
          width: { xs: "100%", md: "30%" },
          borderRadius: 2,
          bgcolor: grey[50],
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CardMedia component="img" height="240" image={images3} alt="Resim 3" />

        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold", color: grey[900] }}
          >
            ABC A.Ş
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, mb: 2, color: "#fff" }}
        >
          Detayları Gör
        </Button>
      </Card>
            {/* Kart 1 */}
            <Card
        sx={{
          width: { xs: "100%", md: "30%" },
          borderRadius: 2,
          bgcolor: grey[50],
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CardMedia component="img" height="240" image={images3} alt="Resim 3" />

        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold", color: grey[900] }}
          >
            ABC A.Ş
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, mb: 2, color: "#fff" }}
        >
          Detayları Gör
        </Button>
      </Card>
            {/* Kart 1 */}
            <Card
        sx={{
          width: { xs: "100%", md: "30%" },
          borderRadius: 2,
          bgcolor: grey[50],
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CardMedia component="img" height="240" image={images3} alt="Resim 3" />

        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold", color: grey[900] }}
          >
            ABC A.Ş
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, mb: 2, color: "#fff" }}
        >
          Detayları Gör
        </Button>
      </Card>

    </Box>
  );
}

export default HomeProduct;
