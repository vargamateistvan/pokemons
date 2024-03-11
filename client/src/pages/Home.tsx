import { Box, Button, Container, Grid, Typography } from "@mui/material";
import useStateContext from "../state/context/state/use-state-context";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDispatchContext from "../state/context/dispatch/use-dispatch-context";
import axios from "axios";
import { PokemonType } from "../state/types";
import Pokemon from "../components/Pokemon";

const Home = () => {
  const { user, pokemons } = useStateContext();
  const dispatch = useDispatchContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }

    getPokemons();
  }, [user]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const getPokemons = useCallback(async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const pokemons = response.data.results;
    dispatch({ type: "SET_POKEMONS", pokemons });
  }, []);

  return (
    <Container>
      <Box>
        <Typography>Home</Typography>
        <Button variant="contained" size="medium" onClick={logout}>
          Logout
        </Button>
      </Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {pokemons?.map((pokemon: PokemonType, index: number) => {
            return (
              <Grid item key={index}>
                <Pokemon key={index} pokemon={pokemon} index={index}></Pokemon>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
