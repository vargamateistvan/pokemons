import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useDispatchContext from "../state/context/dispatch/use-dispatch-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatchContext();

  const login = async () => {
    const response = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });
    console.log(response);
    dispatch({
      type: "SET_USER",
      user: response.data.user,
      token: response.data.token,
    });
    navigate("/");
  };

  const registration = () => {
    navigate("/registration");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5">Login</Typography>
      <Box component="form" noValidate autoComplete="off">
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
        <Button variant="contained" size="medium" onClick={login}>
          Login
        </Button>
        <Button variant="contained" size="medium" onClick={registration}>
          Registration
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
