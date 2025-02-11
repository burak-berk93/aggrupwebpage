
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Card, CardContent, Typography, Grid } from "@mui/material";

// Action Types
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const OrderForm = () => {
  const dispatch = useDispatch();

  // Redux'tan veri almak
  const { cart } = useSelector(state => state);

  // Sepetten ürün kaldırmak
  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
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
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <Typography variant="body1" color="primary">
                  Fiyat: {item.price} TL
                </Typography>
                <TextField
                  label="Miktar"
                  type="number"
                  value={item.quantity}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                  margin="normal"
                />
                <Button 
                sx={{ color: "#fff"}}
                  variant="contained" 
                  color="primary" 
                  onClick={() => removeFromCart(item.id)}
                  fullWidth
                >
                  Kaldır
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div style={{ marginTop: "20px" }}>
        <TextField
          label="Adınız"
          fullWidth
          margin="normal"
        />
        <TextField
          label="E-posta"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Telefon"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px" ,color: "#fff" }}>
          Teklif Gönder
        </Button>
      </div>
    </div>
  );
};

export default OrderForm;
