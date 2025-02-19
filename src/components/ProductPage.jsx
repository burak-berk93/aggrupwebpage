import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom"; // React Router'dan useNavigate import edildi
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion"; // framer-motion'u dahil ediyoruz

import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  TextField,
  Pagination,
  Button,
  Paper,
  Badge,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const productsData = [
  {
    id: 1,
    name: "İnşaat Malzemesi",
    category: "İnşaat Malzemeleri",
    price: 599,
    description: "Lorem Ipsum!!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "İnşaat Malzemesi",
    category: "İnşaat Malzemeleri",
    price: 299,
    description: "Lorem Ipsum!!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "El Aleti",
    category: "El Aletleri",
    price: 1299,
    description: "Lorem Ipsum!!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "El Aleti",
    category: "El Aletleri",
    price: 499,
    description: "Lorem Ipsum!!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Yapı Malzemesi",
    category: "Yapı Malzemeleri",
    price: 899,
    description: "Lorem Ipsum!!",
    image: "https://via.placeholder.com/200",
  },
];

// Redux actionları
const ADD_TO_CART = "ADD_TO_CART";
const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART"; // Yeni silme işlemi ekleyelim.
const TOGGLE_CATEGORY = "TOGGLE_CATEGORY";
const CHANGE_SEARCH = "CHANGE_SEARCH";
const CHANGE_PAGE = "CHANGE_PAGE";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook'u kullanıldı
  const cart = useSelector((state) => state.cart);
  const search = useSelector((state) => state.search);
  const selectedCategories = useSelector((state) => state.selectedCategories);
  const page = useSelector((state) => state.page);

  const [cartOpen, setCartOpen] = useState(false); // Modal açma durumu
  const productsPerPage = 3;
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const handleCategoryChange = (category) => {
    dispatch({ type: TOGGLE_CATEGORY, payload: category });
  };

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  };
  const increaseFromCart = (productId) => {
    dispatch({ type: INCREMENT_QUANTITY, payload: productId });
  };
  const handleSearchChange = (e) => {
    dispatch({ type: CHANGE_SEARCH, payload: e.target.value });
  };

  const handlePageChange = (_, value) => {
    dispatch({ type: CHANGE_PAGE, payload: value });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      {/* Sepet Butonu */}
      <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        position: "fixed", // Sabit pozisyon
        bottom: 16, // Alt kısımda 16px mesafe
        right: 16, // Sağdan 16px mesafe
        zIndex: 1000, // Diğer öğelerin üstünde görünmesi için
        mt: 2,
      }}
    >
      <motion.div
        animate={{
          y: cart.reduce((sum, item) => sum + item.quantity, 0) > 0 ? [-10, 0, -10, 0] : 0, // Bounce animasyonu
         
        }}
        transition={{
          duration: 0.5, // Animasyon süresi
          repeat: Infinity, // Sürekli tekrarlamasını sağlıyoruz
          repeatDelay: 3.5, // 1.5 saniye bekledikten sonra animasyon tekrarlansın
          ease: "easeInOut", // Easing fonksiyonu
        }}
      >
 <IconButton
          color="primary"
          onClick={() => setCartOpen(true)}
          sx={{
            backgroundColor: "#1976d2", // Butonun arka plan rengi
            color: "#fff", // Ikon rengi
            borderRadius: "50%", // Yuvarlak buton
            boxShadow: 3, // Hafif gölge efekti
            padding: "12px", // İç boşluk
            transition: "all 0.3s ease", // Yumuşak geçişler
            "&:hover": {
              backgroundColor: "#1565c0", // Hover durumunda arka plan rengi değişir
              transform: "scale(1.1)", // Hoverda buton büyür
              boxShadow: 6, // Hoverda gölge artar
            },
          }}
        >
          <Badge
            badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)}
            color="secondary"
            sx={{
              fontSize: "1rem", // Badge yazı boyutu
              fontWeight: "bold", // Badge yazı kalınlığı
              top: 0, // Badge'i butona yakın konumlamak
              right: 0,
            }}
          >
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
      </motion.div>
    </Box>

      {/* Kategori ve Arama */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#1976d2",
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              Kategoriler
            </Typography>
            <List>
              {["İnşaat Malzemeleri", "El Aletleri", "Yapı Malzemeleri"].map(
                (category) => (
                  <ListItem key={category} disablePadding>
                    <ListItemButton
                      onClick={() => handleCategoryChange(category)}
                    >
                      <Checkbox
                        checked={selectedCategories.includes(category)}
                      />
                      <ListItemText primary={category} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={9}>
          <TextField
            fullWidth
            label="Ürün Ara"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            sx={{ mb: 2 }}
          />

          <Grid container spacing={3}>
            {paginatedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#1976d2" }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="green">
                      ₺{product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ mt: 2 }}
                      onClick={() => addToCart(product)}
                    >
                      Sepete Ekle
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Sayfalama */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Grid>
        {/* Sepet Modal */}
        <Dialog
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle
            sx={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            Sepetim
          </DialogTitle>
          <DialogContent sx={{ padding: "1.5rem 2rem" }}>
            <List sx={{ maxHeight: "400px", overflowY: "auto" }}>
              {cart.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "16px",
                        borderRadius: "8px",
                      }}
                    />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {item.name} - ₺{item.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Adet: {item.quantity}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton
                      color="primary"
                      size="small"
                      onClick={() => increaseFromCart(item.id)}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">{item.quantity}</Typography>
                    <IconButton
                      color="secondary"
                      size="small"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
            </List>

            {/* Toplam Fiyat */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Toplam Fiyat:
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#1976d2", fontWeight: "bold" }}
              >
                ₺{calculateTotalPrice()}
              </Typography>
            </Box>
          </DialogContent>

          <DialogActions sx={{ padding: "1rem 2rem" }}>
            <Button
              onClick={() => setCartOpen(false)}
              variant="outlined"
              color="primary"
              sx={{ width: "100%", mt: 2 }}
            >
              Kapat
            </Button>
            <Button
              onClick={() => navigate("/Order")}
              variant="contained"
              color="primary"
              sx={{ width: "100%", mt: 2, color: "#fff" }}
            >
              Teklif Gönder
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Container>
  );
};

export default ProductPage;
