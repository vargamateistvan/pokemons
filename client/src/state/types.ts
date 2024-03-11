type User = {
  email: string;
  name: string;
  id: string;
};

export type PokemonType = {
  name: string;
  url: string;
};

export type Action =
  | { type: "REGISTRATION"; email: string; password: string }
  | {
      type: "SET_USER";
      user: User | null;
    }
  | { type: "LOGOUT" }
  | { type: "SET_POKEMONS"; pokemons: PokemonType[] };

export type State = {
  user: User;
  token: string;
  pokemons: PokemonType[];
};
