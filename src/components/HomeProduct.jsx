
import Container from '@mui/material/Container';
import { orange,lightBlue } from "@mui/material/colors"; // Material UI renk paletinden kırmızı rengi import ediyoruz

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import images1 from '../assets/images/Insaat-Malzemeleri.png'
import images2 from '../assets/images/Yapi-Malzemeleri.png'
import images3 from '../assets/images/El-Aletleri-ve-Makinalar.png'

function HomeProduct() {
    const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, padding: '20px' }}>
      {/* Beyaz Kutuyu sarmalayan Box */}
      <Container >
      <Box sx={{ bgcolor: 'white', padding: 4, borderRadius: 2 }}>
       
          {/* Kartlar için Box */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2, // Kartlar arasına boşluk
            }}
          >
            {/* Kart 1 - Başka renk */}
            <Card sx={{ width: '30%', borderRadius: 2, bgcolor: orange[50] }}>
              <CardContent>
                <Typography variant="h5" component="div"  sx={{textAlign: "center", fontWeight: "bold",  color: orange[300], // Renk (theme içindeki secondary)
  }}>
                     İnşaat Malzemeleri
                </Typography>
                
              </CardContent>
              <CardMedia
                component="img"
                height="240"
                image={images1} // Buraya kartın resmini ekleyebilirsiniz
                alt="Resim 1"
              />
           
            </Card>

            {/* Kart 2 - Başka renk */}
            <Card sx={{ width: '30%', borderRadius: 2, bgcolor: lightBlue[50]}}>
              <CardContent>
              <Typography variant="h5" component="div"  sx={{textAlign: "center", fontWeight: "bold",  color: lightBlue[300], // Renk (theme içindeki secondary)
  }}>
                  Yapı Malzemeleri
                </Typography>
               
              </CardContent>
              <CardMedia
                component="img"
                height="240"
                image={images2} // Buraya kartın resmini ekleyebilirsiniz
                alt="Resim 2"
              />
              
            </Card>

            {/* Kart 3 - Başka renk */}
            <Card sx={{ width: '30%', borderRadius: 2, bgcolor: 'lightcoral' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Kart Başlığı 3
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                  Bu kartın açıklama metni burada olacak.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="240"
                image={images3} // Buraya kartın resmini ekleyebilirsiniz
                alt="Resim 3"
              />
           
            </Card>
          </Box>
       
      </Box>
      </Container>
    </Box>
  );
}

export default HomeProduct;
