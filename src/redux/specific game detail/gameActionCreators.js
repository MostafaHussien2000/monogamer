import axios from "axios";

import {
  FETCH_GAME_PROCESS,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_FAILED,
} from "./gameActionTypes";

import { gameDetailURL, gameScreenshotsURL } from "../../api";

export const fetchGameDetail = (id) => {
  return async (dispatch) => {
    dispatch(fetchGameDetailsProcess());
    const gameDetail = await axios.get(gameDetailURL(id));
    const gameScreenshots = await axios.get(gameScreenshotsURL(id));

    const allGameData = {
      details: gameDetail,
      screenshots: gameScreenshots,
    };

    dispatch(fetchGameDetailsSuccess(allGameData));
  };
};

/* Action Creators
=======================================*/
export const fetchGameDetailsProcess = () => ({
  type: FETCH_GAME_PROCESS,
});

export const fetchGameDetailsSuccess = (game_data) => ({
  type: FETCH_GAME_SUCCESS,
  payload: {
    game_details: game_data.details,
    game_screenshots: game_data.screenshots,
  },
});

export const fetchGameDetailsFailed = (error) => ({
  type: FETCH_GAME_FAILED,
  payload: {
    error,
  },
});
