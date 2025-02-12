import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom"; // React Router'dan useNavigate import edildi

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
  const navigate = useNavigate(); // useNavigate hook'u kullanıldı

  return (
    <Box>
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // Mobilde dikey, büyük ekranda yatay
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
    position: "relative",
  }}
>
  {[1, 2, 3].map((item) => (
    <Card
      key={item}
      sx={{
        width: { xs: "100%", md: "30%" },
        borderRadius: 2,
        bgcolor: grey[50],
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CardMedia component="img" height="240" image={images3} alt={`Resim ${item}`} />

      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", fontWeight: "bold", color: grey[900] }}
        >
          ABC A.Ş
        </Typography>
      </CardContent>
    </Card>
  ))}
</Box>

<Box    onClick={() => navigate("/About")} sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 3 }}>
  <Button variant="contained" color="primary" sx={{ color: "#fff" }}>
    Detayları Gör
  </Button>
</Box>
</Box>
  );
}

export default HomeProduct;
