import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cookieName, getCookie } from "../utils/cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie(cookieName)) {
      return navigate("/");
    }
  }, [navigate]);

  const login = async () => {
    await axios.post(
      "http://localhost:8080/api/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    navigate("/");
  };

  const registration = () => {
    navigate("/registration");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ pb: 2 }}>
          Login
        </Typography>
        <Box>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
            type="password"
          />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" size="medium" onClick={login}>
              Login
            </Button>
            <Button variant="contained" size="medium" onClick={registration}>
              Registration
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
