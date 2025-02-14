import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Firebase Firestore bağlantısı

// Firestore'a teklif ekleme işlemi (AsyncThunk ile)
export const addOffer = createAsyncThunk("offers/addOffer", async (offerData) => {
  const docRef = await addDoc(collection(db, "offers"), offerData);
  return { id: docRef.id, ...offerData }; // Firestore'dan dönen ID ile kaydı geri döndür
});

// Redux state yönetimi
const offerSlice = createSlice({
  name: "offers",
  initialState: {
    offers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOffer.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOffer.fulfilled, (state, action) => {
        state.loading = false;
        state.offers.push(action.payload);
      })
      .addCase(addOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default offerSlice.reducer;
