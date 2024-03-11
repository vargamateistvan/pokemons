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

    default: {
      break;
    }
  }

  return state;
};

export default reducer;
