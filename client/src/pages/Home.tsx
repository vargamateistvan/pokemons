import { Container } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStateContext from "../state/context/state/use-state-context";
import useDispatchContext from "../state/context/dispatch/use-dispatch-context";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";
import PokemonSearch from "../components/PokemonSearch";
import { cookieName, getCookie } from "../utils/cookie";

const Home = () => {
  const { pokemons } = useStateContext();
  const dispatch = useDispatchContext();
  const navigate = useNavigate();

  const getUserData = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:8080/api/auth/user-data",
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "SET_USER",
      user: response.data.user,
    });
  }, []);

  const getPokemons = useCallback(async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const pokemons = response.data.results;
    dispatch({ type: "SET_POKEMONS", pokemons });
  }, []);

  const getMyPokemons = useCallback(async () => {
    const response = await axios.get("http://localhost:8080/api/pokemons", {
      withCredentials: true,
    });

    const myPokemons = response.data.data;
    dispatch({ type: "SET_MY_POKEMONS", myPokemons });
  }, [dispatch]);

  useEffect(() => {
    if (!getCookie(cookieName)) {
      return navigate("/login");
    }

    getUserData();
    getPokemons();
    getMyPokemons();
  }, [navigate, getUserData, getPokemons, getMyPokemons]);

  return (
    <Container>
      <Header />
      {/* <PokemonSearch /> */}
      <PokemonList pokemons={pokemons} />
    </Container>
  );
};

export default Home;
