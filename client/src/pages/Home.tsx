import { Container } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStateContext from "../state/context/state/use-state-context";
import useDispatchContext from "../state/context/dispatch/use-dispatch-context";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";
import PokemonSearch from "../components/PokemonSearch";

const Home = () => {
  const { pokemons, token } = useStateContext();
  const dispatch = useDispatchContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }

    getPokemons();
    getMyPokemons();
  }, [token]);

  const getPokemons = useCallback(async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const pokemons = response.data.results;
    dispatch({ type: "SET_POKEMONS", pokemons });
  }, []);

  const getMyPokemons = useCallback(async () => {
    const response = await axios.get("http://localhost:8080/api/pokemons", {
      headers: { Authorization: token },
    });

    const myPokemons = response.data.data;
    dispatch({ type: "SET_MY_POKEMONS", myPokemons });
  }, []);

  return (
    <Container>
      <Header />
      {/* <PokemonSearch /> */}
      <PokemonList pokemons={pokemons} />
    </Container>
  );
};

export default Home;
