import { Button, Container, Typography } from "@mui/material";
import { PokemonType } from "../state/types";
import axios from "axios";
import useStateContext from "../state/context/state/use-state-context";

type Props = {
  pokemon: PokemonType;
  index: number;
};

const Pokemon = ({ pokemon, index }: Props) => {
  const { token } = useStateContext();

  const catchPokemon = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/pokemon/catch",
      {
        name: pokemon.name,
      },
      { headers: { Authorization: token } }
    );
    console.log(response);
  };

  return (
    <Container>
      <Typography>{pokemon.name}</Typography>
      <img
        alt={pokemon.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`}
      ></img>
      <Button variant="contained" size="medium" onClick={catchPokemon}>
        Catch Pokemon
      </Button>
    </Container>
  );
};

export default Pokemon;
