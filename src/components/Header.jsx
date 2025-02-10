import { useState } from "react";
import { red, grey } from "@mui/material/colors"; // Material UI renk paletinden kırmızı rengi import ediyoruz
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import logo from "../assets/images/aggrup-logo.svg"; // Logonun resmi import ediliyor
import TextField from '@mui/material/TextField';



function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    "Ana Sayfa",
    "Ürünler",
    "Hakkımızda",
    "Tekli Al",
    "İletişim",
  ];

  return (
    <>
      <AppBar position="static" sx={{  background:"white", color: grey[800], }}>
        <Container maxWidth="lg">
          <Toolbar>
            {/* Mobil menü butonu */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Grid container spacing={2}>
              <Grid item xs={3}>
              <Box sx={{ paddingTop: 2, display: 'flex', justifyContent: 'flex-start' }}>
                <img src={logo} alt="Logo"  height="50" />
                
               
                </Box>
              </Grid>

              {/* Masaüstü için menü */}
              <Grid item xs={6}>
                <Box sx={{ display: { xs: "none", md: "flex" }, padding: 2 , fontSize: "38px"}}>
                  {menuItems.map((item) => (
                    <Button key={item} color="inherit">
                      {item}
                    </Button>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ padding: 2 }}>
                <TextField fullWidth label="Ürün Ara" id="outlined-size-small" size="small"/>


                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobil Menü - Full Ekran Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100vw", // Tam ekran Drawer
            backgroundColor: red[500], // Kırmızı arka plan
            color: "white", // Yazı rengi beyaz
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={handleDrawerToggle}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;



