import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registration = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/registration", {
        name,
        email,
        password,
      });
      login();
    } catch (e) {
      console.error(e);
    }
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5">Registration</Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
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
        <Button variant="contained" size="medium" onClick={registration}>
          Registration
        </Button>
        <Button variant="contained" size="medium" onClick={login}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Registration;
