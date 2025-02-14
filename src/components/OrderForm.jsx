import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  IconButton,
  Box,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { db } from "../firebaseConfig";  // ✅ Firestore bağlantısı
import { collection, addDoc } from "firebase/firestore";
// Action Types
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
const CLEAR_ITEM_QUANTITY = "CLEAR_ITEM_QUANTITY";

const OrderForm = () => {
  const [offerData, setOfferData] = useState({
    aciklama: "",
    adSoyad: "",
    email: "",
    telefon: "",
    urunler: [], // Sepet verilerini buraya ekleyeceğiz
  });

  const dispatch = useDispatch();

  // Redux'tan veri almak
  const { cart } = useSelector((state) => state);

  // Sepetten ürün kaldırmak
  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  const increaseFromCart = (productId) => {
    dispatch({ type: INCREMENT_QUANTITY, payload: productId });
  };

  const clearFromCart = (productId) => {
    dispatch({ type: CLEAR_ITEM_QUANTITY, payload: productId });
  };

  const handleChange = (e) => {
    setOfferData({
      ...offerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sepetteki ürünleri offerData'ya dahil ediyoruz
    const updatedOfferData = {
      ...offerData,
      urunler: cart.map((item) => ({
        urunAdi: item.name,
        urunAciklama: item.description,
        adet: item.quantity,
        fiyat: item.price,
      })),
    };

    try {
      // Firestore'a veriyi ekleyin
      const docRef = await addDoc(collection(db, "teklifler"), updatedOfferData);
      console.log("Teklif başarıyla eklendi, ID:", docRef.id);

      // Formu sıfırlayın
      setOfferData({ adSoyad: "", email: "", telefon: "", aciklama: "", urunler: [] });
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };

  // Toplam fiyatı hesapla
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Teklif Formu
      </Typography>

      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: "bold", mb: 2 }}>
                  {item.price} TL
                </Typography>

                {/* Miktar ve Butonlar */}
                <Box display="flex" alignItems="center" justifyContent="center" gap={1} sx={{ mb: 2 }}>
                  <IconButton color="secondary" onClick={() => removeFromCart(item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ minWidth: "40px" }}>
                    {item.quantity}
                  </Typography>
                  <IconButton color="primary" onClick={() => increaseFromCart(item.id)}>
                    <AddIcon />
                  </IconButton>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ color: "#fff", borderRadius: 2 }}
                  onClick={() => clearFromCart(item.id)}
                >
                  Sepetten Çıkar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Toplam Fiyat */}
      <Typography variant="h5" color="primary" sx={{ marginTop: "20px", fontWeight: "bold" }}>
        Toplam Fiyat: {calculateTotalPrice()} TL
      </Typography>

      <div style={{ marginTop: "20px" }}>
        <TextField
          label="Adınız Soyadınız*"
          fullWidth
          margin="normal"
          name="adSoyad"
          value={offerData.adSoyad}
          onChange={handleChange}
        />
        <TextField
          label="E-posta*"
          fullWidth
          margin="normal"
          name="email"
          value={offerData.email}
          onChange={handleChange}
        />
        <TextField
          label="Telefon*"
          fullWidth
          margin="normal"
          name="telefon"
          value={offerData.telefon}
          onChange={handleChange}
        />
        <TextField
          label="Açıklamanızı buraya yazın"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          margin="normal"
          name="aciklama"
          value={offerData.aciklama}
          onChange={handleChange}
          helperText="Lütfen açıklamanızı ekleyin"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px", color: "#fff" }}
          onClick={handleSubmit}
        >
          Teklif Gönder
        </Button>
      </div>
    </div>
  );
};

export default OrderForm;
