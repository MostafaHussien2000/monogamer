import axios from "axios";

import { popularGamesURL, upComingGamesURL, newGamesURL } from "../../api";

import {
  FETCH_GAMES_PROCESS,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILED,
} from "./gamesActionTypes";

/* Fetching Games Actions
=======================================*/
export const fetchGames = () => {
  return async (dispatch) => {
    dispatch(fetchGamesProcess());

    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upComingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    const allGamesData = {
      popular: popularGamesData.data,
      upcoming: upcomingGamesData.data,
      new: newGamesData.data,
    };

    dispatch(fetchGamesSuccess(allGamesData));
  };
};

/* Action Creators
=======================================*/
export const fetchGamesProcess = () => ({
  type: FETCH_GAMES_PROCESS,
});

export const fetchGamesSuccess = (games) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: {
    popular_games: games.popular,
    upcoming_games: games.upcoming,
    new_games: games.new,
  },
});

export const fetchGamesFailed = (error) => ({
  type: FETCH_GAMES_FAILED,
  payload: {
    error,
  },
});
