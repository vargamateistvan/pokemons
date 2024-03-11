import { Box, Grid } from "@mui/material";
import { PokemonType } from "../state/types";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemons }) => {
  return (
    <Box>
      <Grid
        sx={{ pt: 10 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
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
  );
};

export default PokemonList;
