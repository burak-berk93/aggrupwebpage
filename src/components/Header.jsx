import { useState } from "react";
import { Link } from "react-router-dom"; // React Router'dan Link import edildi
import {  grey } from "@mui/material/colors";
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
import logo from "../assets/images/aggrup-logo.svg";
import TextField from "@mui/material/TextField";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Ürünler", path: "/Product" },
    { name: "Hakkımızda", path: "/about" },
    { name: "Tekli Al", path: "/Order" },
    { name: "İletişim", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: "white", color: grey[800] }}>
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
                <Box sx={{ paddingTop: 2, display: "flex", justifyContent: "flex-start" }}>
                  <img src={logo} alt="Logo" height="50" />
                </Box>
              </Grid>

              {/* Masaüstü için menü */}
              <Grid item xs={6}>
                <Box sx={{ display: { xs: "none", md: "flex" }, padding: 2 }}>
                  {menuItems.map((item) => (
                    <Button key={item.path} color="inherit" component={Link} to={item.path}>
                      {item.name}
                    </Button>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={3} sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ padding: 2 }}>
                  <TextField fullWidth label="Ürün Ara" id="outlined-size-small" size="small" />
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
            width: "100vw",
            backgroundColor: grey[800],
            color: "white",
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.path} onClick={handleDrawerToggle} component={Link} to={item.path}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
