import { useState } from "react";
import Container from "@mui/material/Container";
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
  useMediaQuery,
  Badge,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const productsData = [
  { id: 1, name: "İnşaat Malzemesi", category: "İnşaat Malzemeleri", price: 599, description: "Lorem Ipsum!!", image: "https://via.placeholder.com/200" },
  { id: 2, name: "İnşaat Malzemesi", category: "İnşaat Malzemeleri", price: 299, description: "Lorem Ipsum!!", image: "https://via.placeholder.com/200" },
  { id: 3, name: "El Aleti", category: "El Aletleri", price: 1299, description: "Lorem Ipsum!!", image: "https://via.placeholder.com/200" },
  { id: 4, name: "El Aleti", category: "El Aletleri", price: 499, description: "Lorem Ipsum!!", image: "https://via.placeholder.com/200" },
  { id: 5, name: "Yapı Malzemesi", category: "Yapı Malzemeleri", price: 899, description: "Lorem Ipsum!!", image: "https://via.placeholder.com/200" },
];

function ProductPage() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [isCartOpen, setCartOpen] = useState(false);
  const productsPerPage = 3;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice((page - 1) * productsPerPage, page * productsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => 
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // 0 olanları kaldır
    });
  };
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      {/* Sepet Butonu */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <IconButton color="primary" onClick={() => setCartOpen(true)}>
        <Badge badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)} color="secondary">
        <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
      </Box>

      {/* Kategori ve Arama */}
      <Grid container spacing={3}>
        {!isMobile && (
          <Grid item xs={3}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>Kategoriler</Typography>
              <List>
                {["İnşaat Malzemeleri", "El Aletleri", "Yapı Malzemeleri"].map((category) => (
                  <ListItem key={category} disablePadding>
                    <ListItemButton onClick={() => handleCategoryChange(category)}>
                      <Checkbox checked={selectedCategories.includes(category)} />
                      <ListItemText primary={category} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        )}

        <Grid item xs={12} sm={9}>
          <TextField fullWidth label="Ürün Ara" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} sx={{ mb: 2 }} />

          <Grid container spacing={3}>
            {paginatedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card sx={{ borderRadius: 3, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6, transform: "scale(1.02)" } }}>
                  <CardMedia component="img" height="180" image={product.image} alt={product.name} />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{product.description}</Typography>
                    <Typography variant="h6" color="green">₺{product.price}</Typography>
                    <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => addToCart(product)}>Sepete Ekle</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Sayfalama */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination count={totalPages} page={page} onChange={(_, value) => setPage(value)} color="primary" />
          </Box>
        </Grid>
      </Grid>

      {/* Sepet Modal */}
      <Dialog open={isCartOpen} onClose={() => setCartOpen(false)} fullWidth maxWidth="sm">
  <DialogTitle>Sepetiniz</DialogTitle>
  <DialogContent>
    {cart.length > 0 ? (
      cart.map((item) => (
        <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography>{item.name} x {item.quantity}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="error" onClick={() => decreaseQuantity(item.id)}>
              -
            </IconButton>
            <Typography color="green">₺{item.price * item.quantity}</Typography>
          </Box>
        </Box>
      ))
    ) : (
      <Typography>Sepetiniz boş</Typography>
    )}
  </DialogContent>
  <DialogActions>
    <Typography sx={{ flexGrow: 1, ml: 2 }}>Toplam: ₺{getTotalPrice()}</Typography>
    <Button onClick={() => setCart([])} color="error">Sepeti Temizle</Button>
    <Button onClick={() => setCartOpen(false)} variant="contained">Kapat</Button>
  </DialogActions>
</Dialog>

    </Container>
  );
}

export default ProductPage;
