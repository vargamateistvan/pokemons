import { State } from "./types";

export const STATE: State = {
  user: null,
  token: JSON.parse(localStorage.getItem("token")) | null,
  pokemons: [],
  myPokemons: [],
};
