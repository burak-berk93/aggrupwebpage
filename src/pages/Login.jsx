// Login.jsx
import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Başarıyla giriş yaptıktan sonra yönlendirme
    } catch (err) {
      setError("Giriş yapılırken hata oluştu: " + err.message);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
