type User = {
  email: string;
  name: string;
  id: string;
};

type Pokemon = {
  name: string;
};

export type Action =
  | { type: "REGISTRATION"; email: string; password: string }
  | {
      type: "SET_USER";
      user: User | null;
    }
  | { type: "LOGOUT" };

export type State = {
  user: User;
  pokemons: Pokemon[];
};
