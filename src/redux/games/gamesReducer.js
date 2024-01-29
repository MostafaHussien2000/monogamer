import {
  FETCH_GAMES_PROCESS,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILED,
} from "./gamesActionTypes";

const initialState = {
  loading: true,
  popular_games: [],
  upcoming_games: [],
  new_games: [],
  error: null,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_PROCESS:
      return {
        ...state,
        loading: true,
        popular_games: [],
        upcoming_games: [],
        new_games: [],
        error: null,
      };

    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        popular_games: action.payload.popular_games,
        upcoming_games: action.payload.upcoming_games,
        new_games: action.payload.new_games,
        error: null,
      };

    case FETCH_GAMES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;
