import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText, Grid, Paper, Typography, Divider } from "@mui/material";
import { db } from "../firebaseConfig";  // ✅ Firestore bağlantısı
import { collection, getDocs } from "firebase/firestore";

function OfferForm() {
  const [offers, setOffers] = useState([]); // 📌 Teklif listesi

  // 🔹 Firestore'dan teklifleri çek
  const fetchOffers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "teklifler"));
      const offerList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffers(offerList);
    } catch (error) {
      console.error("Teklifleri çekerken hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchOffers(); // Sayfa yüklendiğinde teklifleri getir
  }, []);

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      {/* Teklif Listesi */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Teklif Listesi
        </Typography>
        <List>
          {offers.map((offer) => (
            <Paper key={offer.id} sx={{ mb: 3, p: 3, boxShadow: 3, borderRadius: 2 }}>
              <Grid container spacing={2}>
                {/* Teklif Bilgileri */}
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {offer.aciklama}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>İsim:</strong> {offer.adSoyad} | <strong>Telefon:</strong> {offer.telefon} | <strong>E-posta:</strong> {offer.email}
                  </Typography>
                </Grid>

                {/* Ürün Bilgileri */}
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    <strong>Ürünler:</strong>
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {offer.urunler && offer.urunler.length > 0 ? (
                      offer.urunler.map((urun, index) => (
                        <Paper key={index} sx={{ mb: 2, p: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
                          <ListItem sx={{ padding: 0 }}>
                            <ListItemText
                              primary={`Ürün Adı: ${urun.urunAdi}`}
                              secondary={`Adet: ${urun.adet} | Fiyat: ${urun.fiyat} TL | Açıklama: ${urun.urunAciklama}`}
                            />
                          </ListItem>
                        </Paper>
                      ))
                    ) : (
                      <Typography variant="body2" color="textSecondary">Ürün bulunmamaktadır.</Typography>
                    )}
                  </List>
                </Grid>
              </Grid>
              <Divider sx={{ my: 2 }} />
            </Paper>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default OfferForm;
