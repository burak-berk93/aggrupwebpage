import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; // React Router'dan useNavigate import edildi

import images1 from "../assets/images/Tugla.png";
import images2 from "../assets/images/Cimento.png";
import images3 from "../assets/images/Boya.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Örnek ürün verileri (API'den de çekebilirsiniz)
const favoriteProducts = [
  {
    id: 1,
    title: "İnşaat Malzemeleri",
    image: images1,
    description: "En kaliteli inşaat malzemeleri burada.",
  },
  {
    id: 2,
    title: "Yapı Malzemeleri",
    image: images2,
    description: "Dayanıklı yapı malzemeleri için doğru adres!",
  },
  {
    id: 3,
    title: "El Aletleri ve Makinalar",
    image: images3,
    description: "İşinizi kolaylaştıracak el aletleri.",
  },
  {
    id: 4,
    title: "El Aletleri ve Makinalar",
    image: images1,
    description: "İşinizi kolaylaştıracak el aletleri.",
  },
  {
    id: 5,
    title: "El Aletleri ve Makinalar",
    image: images2,
    description: "İşinizi kolaylaştıracak el aletleri.",
  },
  {
    id: 6,
    title: "El Aletleri ve Makinalar",
    image: images3,
    description: "İşinizi kolaylaştıracak el aletleri.",
  },
];

function FavoriteProductsSlider() {
  const navigate = useNavigate(); // useNavigate hook'u kullanıldı

  return (
    <Box sx={{ padding: 4, bgcolor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 2 }}
      >
        Öne Çıkan Ürünler!
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobilde 1 ürün
          768: { slidesPerView: 2 }, // Tabletlerde 2 ürün
          1024: { slidesPerView: 3 }, // Orta ekranlarda 3 ürün
          1280: { slidesPerView: 4 }, // Büyük ekranlarda 4 ürün
          1536: { slidesPerView: 5 }, // Çok büyük ekranlarda 5 ürün
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {favoriteProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{
                  height: 200,
                  objectFit: "contain",
                }}
              />
         <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    {product.title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {product.description}
  </Typography>

  <Button
    variant="contained"
    onClick={() => navigate("/Product")}
    color="primary"
    sx={{ mt: 2, color: "#fff" }}

  >
    Detayları Gör
  </Button>
</CardContent>

            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default FavoriteProductsSlider;
