import { Container } from "@mui/material";
import Header from "../components/Header";
import useStateContext from "../state/context/state/use-state-context";
import PokemonList from "../components/PokemonList";

const MyPokemons = () => {
  const { myPokemons } = useStateContext();

  return (
    <Container>
      <Header />
      <PokemonList pokemons={myPokemons} />
    </Container>
  );
};

export default MyPokemons;
