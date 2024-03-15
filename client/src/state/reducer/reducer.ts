import { Action, State } from "../types";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_USER": {
      state = {
        ...state,
        user: action.user,
      };
      break;
    }

    case "LOGOUT": {
      state = {
        user: null,
      };
      break;
    }

    case "SET_POKEMONS": {
      state = {
        ...state,
        pokemons: action.pokemons,
      };
      break;
    }

    case "SET_MY_POKEMONS": {
      state = {
        ...state,
        myPokemons: action.myPokemons,
      };
      break;
    }

    default: {
      break;
    }
  }

  return state;
};

export default reducer;
