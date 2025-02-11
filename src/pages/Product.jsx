
import ProductPage from "../components/ProductPage";
import ProductSlider from "../components/ProductSlider";
import Footer from '../components/Footer';

import { Box, Container } from "@mui/material";

function Product() {
  return (
    <div>
      <Container>
        <Box>
          <ProductSlider />
        </Box>
      </Container>
      <ProductPage />
      <Footer />
    </div>
  );
}

export default Product;
