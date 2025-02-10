import Container from "@mui/material/Container";
import { orange, lightBlue, purple } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import images1 from "../assets/images/Insaat-Malzemeleri.png";
import images2 from "../assets/images/Yapi-Malzemeleri.png";
import images3 from "../assets/images/El-Aletleri-ve-Makinalar.png";

function HomeProduct() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, padding: "20px" }}>
      {/* Beyaz kutu (sadece büyük ekranlarda görünecek) */}
      <Container sx={{ display: { xs: "none", md: "block" } }}>
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
      <Card sx={{ width: { xs: "100%", md: "30%" }, borderRadius: 2, bgcolor: orange[50] }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold", color: orange[300] }}
          >
            İnşaat Malzemeleri
          </Typography>
        </CardContent>
        <CardMedia component="img" height="240" image={images1} alt="Resim 1" />
      </Card>

      {/* Kart 2 */}
      <Card sx={{ width: { xs: "100%", md: "30%" }, borderRadius: 2, bgcolor: lightBlue[50] }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold", color: lightBlue[300] }}
          >
            Yapı Malzemeleri
          </Typography>
        </CardContent>
        <CardMedia component="img" height="240" image={images2} alt="Resim 2" />
      </Card>

      {/* Kart 3 */}
      <Card sx={{ width: { xs: "100%", md: "30%" }, borderRadius: 2, bgcolor: purple[50] }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold", color: purple[300] }}
          >
            El Aletleri ve Makinalar
          </Typography>
        </CardContent>
        <CardMedia component="img" height="240" image={images3} alt="Resim 3" />
      </Card>
    </Box>
  );
}

export default HomeProduct;
