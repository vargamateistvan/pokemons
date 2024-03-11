import { AppBar, Box, Button, Container, Divider } from "@mui/material";
import useDispatchContext from "../state/context/dispatch/use-dispatch-context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatchContext();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const toPokemons = () => {
    navigate("/");
  };

  const toMyPokemons = () => {
    navigate("/my-pokemons");
  };

  return (
    <AppBar>
      <Box display="flex" justifyContent="space-between">
        <Divider />
        <Container>
          <Button
            variant="text"
            sx={{ p: 2, color: "white" }}
            onClick={toPokemons}
          >
            Pokemons
          </Button>
          <Button variant="text" sx={{ color: "white" }} onClick={toMyPokemons}>
            My Pokemons
          </Button>
        </Container>
        <Button variant="text" sx={{ color: "white", pr: 2 }} onClick={logout}>
          Logout
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
