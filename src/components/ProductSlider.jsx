import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Product from "../assets/images/product-bg.png";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography, Button } from "@mui/material";
import { Container } from "postcss";

const slides = [
  {
    title: "Hızlı ve Güvenilir Alışveriş",
    slogan: "En iyi fiyatlarla kaliteli ürünler!",
    image: {Product}, // Ürün görseli
  },
  {
    title: "Benzersiz İndirimler",
    slogan: "Kaçırılmayacak fırsatlarla dolu!",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Yenilikçi Tasarımlar",
    slogan: "Tarzını yansıt, farkını göster!",
    image: "https://via.placeholder.com/300",
  },
];

function BannerSwiper() {
  return (
    
    
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "316px",
        backgroundImage: `url(${Product})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "16px", // Köşeleri yuvarlatır

      }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        style={{ width: "80%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              {/* Sol Tarafta Başlık ve Slogan */}
              <Box sx={{ flex: 1, color: "white", textAlign: "left", pl: 4 }}>
                <Typography variant="h4" fontWeight="bold">
                  {slide.title}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {slide.slogan}
                </Typography>
                <Button variant="contained" sx={{ mt: 2, bgcolor: "#fff" }}>
                  Alışverişe Başla
                </Button>
              </Box>

              {/* Sağ Tarafta Resim */}
              <Box sx={{ flex: 1, textAlign: "right" }}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
 
  );
}

export default BannerSwiper;
