import {
  FETCH_GAME_PROCESS,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_FAILED,
} from "./gameActionTypes";

const initialState = {
  loading: true,
  game_details: {},
  game_screenshots: { results: [] },
  error: null,

  // My Methods
  set setGameDetail(val) {
    this.game_details = val;
    this.game_screenshots = val;
  },
};

const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_PROCESS:
      return {
        ...state,
        loading: true,
        game_details: {},
        game_screenshots: { results: [] },
        error: null,
      };

    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        game_details: action.payload.game_details.data,
        game_screenshots: action.payload.game_screenshots.data,
        error: null,
      };

    case FETCH_GAME_FAILED:
      return {
        ...state,
        loading: false,
        game_details: {},
        game_screenshots: { results: [] },
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
