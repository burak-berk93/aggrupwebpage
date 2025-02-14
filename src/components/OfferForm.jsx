import React, { useState, useEffect } from "react";
import { Box, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { db } from "../firebaseConfig";  // ✅ Firestore bağlantısı
import { collection, addDoc, getDocs } from "firebase/firestore";

function OfferForm() {
  const [offerData, setOfferData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [offers, setOffers] = useState([]); // 📌 Teklif listesi

  // 🔹 Firestore'dan teklifleri çek
  const fetchOffers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "offers"));
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

  const handleChange = (e) => {
    setOfferData({
      ...offerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "offers"), offerData);
      console.log("Teklif başarıyla eklendi, ID:", docRef.id);

      // Formu sıfırla
      setOfferData({ title: "", description: "", price: "" });

      fetchOffers(); // 📌 Yeni teklifi ekledikten sonra listeyi güncelle
    } catch (error) {
      console.error("Teklif eklenirken hata oluştu:", error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={offerData.title}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={offerData.description}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Price"
          name="price"
          value={offerData.price}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Offer
        </Button>
      </form>

      {/* 🔹 Teklif Listesi */}
      <Box sx={{ mt: 4 }}>
        <h3>Teklif Listesi</h3>
        <List>
          {offers.map((offer) => (
            <ListItem key={offer.id} divider>
              <ListItemText
                primary={`${offer.title} - ${offer.price} TL`}
                secondary={offer.description}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default OfferForm;
