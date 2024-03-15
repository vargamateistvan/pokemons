import { Box, Button, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import useStateContext from "../state/context/state/use-state-context";
import { useCallback, useEffect, useMemo, useState } from "react";
import useDispatchContext from "../state/context/dispatch/use-dispatch-context";

const PokemonDetail = () => {
  const { name } = useParams();
  const { myPokemons } = useStateContext();
  const dispatch = useDispatchContext();
  const [pokemon, setPokemon] = useState(null);

  const hasPokemon = useMemo(
    () => myPokemons.find((pokemon) => pokemon?.name === name),
    [myPokemons, name]
  );

  useEffect(() => {
    getPokemonDetail();
  }, []);

  const getPokemonDetail = useCallback(async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const pokemon = response.data;
    setPokemon(pokemon);
  }, []);

  const catchPokemon = async () => {
    await axios.post(
      "http://localhost:8080/api/pokemon/catch",
      {
        name: name,
      },
      { withCredentials: true }
    );

    getMyPokemons();
  };

  const releasePokemon = async () => {
    await axios.delete(`http://localhost:8080/api/pokemon/release/${name}`, {
      withCredentials: true,
    });

    getMyPokemons();
  };

  const getMyPokemons = useCallback(async () => {
    const response = await axios.get("http://localhost:8080/api/pokemons", {
      withCredentials: true,
    });

    const myPokemons = response.data.data;
    dispatch({ type: "SET_MY_POKEMONS", myPokemons });
  }, []);

  return (
    <Container>
      <Header />
      <Box display="flex">
        <Container>
          <Typography variant="h1">{pokemon?.name}</Typography>
          <Box
            component="img"
            sx={{ height: "auto", maxWidth: "100%", pr: 10, pb: 5 }}
            alt={name}
            src={`https://img.pokemondb.net/artwork/${name}.jpg`}
          ></Box>
          <Box>
            {hasPokemon ? (
              <Button variant="outlined" size="medium" onClick={releasePokemon}>
                Release Pokemon
              </Button>
            ) : (
              <Button variant="outlined" size="medium" onClick={catchPokemon}>
                Catch Pokemon
              </Button>
            )}
          </Box>
        </Container>

        <Container>
          <Typography variant="h3">Abilities</Typography>
          {pokemon?.abilities.map((ability: any, index: number) => {
            return (
              <Container key={index}>
                <Typography>Name: {ability.ability.name}</Typography>
                <Typography>Hidden: {ability.is_hidden}</Typography>
                <Typography>Slot: {ability.slot}</Typography>
              </Container>
            );
          })}

          <Typography variant="h3">Types</Typography>
          {pokemon?.types.map((type: any, index: number) => {
            return (
              <Container key={index}>
                <Typography>Name: {type.type.name}</Typography>
                <Typography>Slot: {type.slot}</Typography>
              </Container>
            );
          })}

          <Typography>Weight: {pokemon?.weight}</Typography>
        </Container>

        <Container>
          <Typography variant="h3">Stats</Typography>
          {pokemon?.stats.map((stat: any, index: number) => {
            return (
              <Container key={index}>
                <Typography>Name: {stat.stat.name}</Typography>
                <Typography>Base start: {stat.base_start}</Typography>
                <Typography>Effort: {stat.effort}</Typography>
              </Container>
            );
          })}
        </Container>
      </Box>
    </Container>
  );
};

export default PokemonDetail;
