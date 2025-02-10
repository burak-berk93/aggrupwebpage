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
} from "@mui/material";

const productsData = [
  {
    id: 1,
    name: "İnşaat Malzemeleleri",
    category: "İnşaat Malzemeleleri",
    price: "₺599",
    description: "Lorem İpsum!!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "İnşaat Malzemeleleri",
    category: "İnşaat Malzemeleleri",
    price: "₺299",
    description: "Lorem İpsum!!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "El Aletleri",
    category: "El Aletleri",
    price: "₺1.299",
    description: "Lorem İpsum!!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "El Aletleri",
    category: "El Aletleri",
    price: "₺499",
    description: "Lorem İpsum!!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Yapı Malzemeleri",
    category: "Yapı Malzemeleri",
    price: "₺899",
    description: "Lorem İpsum!!",
    image: "https://via.placeholder.com/200",
  },
];

const categories = ["İnşaat Malzemeleleri", "El Aletleri", "Yapı Malzemeleri"];

function ProductPage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 3;
  const isMobile = useMediaQuery("(max-width: 768px)");

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
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    
    <Container>
      <Box sx={{ width: "90%", margin: "auto", mt: 4 }}>
    
        {/* Kategori Menüsü - Mobilde Üstte Yatay Kaydırılabilir */}
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              pb: 1,
              mb: 2,
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategories.includes(category)
                    ? "contained"
                    : "outlined"
                }
                onClick={() => handleCategoryChange(category)}
                sx={{
                  mx: 1,
                  whiteSpace: "nowrap",
                  borderRadius: 5,
                  flexShrink: 0,
                }}
              >
                {category}
              </Button>
            ))}
          </Box>
        )}

        <Grid container spacing={3}>
          {/* Masaüstü Kategori Menüsü (Mobilde Gizleniyor) */}
          {!isMobile && (
            <Grid item xs={3}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#1976d2" }}
                >
                  Kategoriler
                </Typography>
                <List>
                  {categories.map((category) => (
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
                  ))}
                </List>
              </Paper>
            </Grid>
          )}

          {/* Ürünler */}
          <Grid item xs={12} sm={9}>
            {/* Arama Kutusu */}
            <TextField
              fullWidth
              label="Ürün Ara"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f5f5f5",
                },
              }}
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
                        {product.price}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          mt: 2,
                          bgcolor: "primary",
                          color: "#fff", 
                        }}
                      >
                        Bilgi Al
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Sayfalama */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3,  }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
               
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductPage;
