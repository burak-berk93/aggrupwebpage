import React, { useState } from "react";
import { Button, TextField, Box, Typography, Paper, Container } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"; // reCAPTCHA'ı import ettik

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null); // reCAPTCHA değerini tutacağız

  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setError("Lütfen reCAPTCHA doğrulamasını yapın.");
      return; // Eğer reCAPTCHA doğrulanmamışsa form gönderilmesin
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Başarıyla giriş yaptıktan sonra yönlendirme
    } catch (err) {
      setError("Giriş yapılırken hata oluştu: " + err.message);
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); // reCAPTCHA token'ını alıyoruz
    setError(""); // Hata mesajını sıfırlıyoruz
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" color="primary" sx={{ marginBottom: 2 }}>
          Giriş Yap
        </Typography>

        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
            variant="outlined"
          />
          <TextField
            type="password"
            label="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
            variant="outlined"
          />
          
          {error && <Typography color="error" variant="body2" sx={{ mb: 2 }}>{error}</Typography>}

          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY" // Buraya kendi site key'inizi yerleştirin
            onChange={handleRecaptchaChange} // reCAPTCHA'dan alınan token'ı yakalayacağız
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: 1.5, fontSize: 16, marginTop: 2 }}
          >
            Giriş Yap
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
