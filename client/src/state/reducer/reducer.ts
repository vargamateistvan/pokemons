import { Action, State } from "../types";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_USER": {
      state = {
        ...state,
        user: action.user,
        token: action.token,
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

    default: {
      break;
    }
  }

  return state;
};

export default reducer;
