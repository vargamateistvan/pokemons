import { Box, Container, Typography } from "@mui/material";
import { PokemonType } from "../state/types";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import useStateContext from "../state/context/state/use-state-context";

type Props = {
  pokemon: PokemonType;
  index: number;
};

const Pokemon = ({ pokemon }: Props) => {
  const { myPokemons } = useStateContext();
  const navigate = useNavigate();

  const hasPokemon = useMemo(
    () => myPokemons.find((myPokemon) => myPokemon?.name === pokemon.name),
    [myPokemons]
  );

  const goToDetails = () => {
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <Container
      sx={{ width: 150, height: 150, cursor: "pointer" }}
      onClick={goToDetails}
    >
      {hasPokemon ? (
        <Typography sx={{ color: "green" }}>{pokemon.name}</Typography>
      ) : (
        <Typography sx={{ color: "red" }}>{pokemon.name}</Typography>
      )}

      <Box
        component="img"
        sx={{ height: "auto", maxWidth: "100%" }}
        alt={pokemon.name}
        src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
      ></Box>
    </Container>
  );
};

export default Pokemon;
