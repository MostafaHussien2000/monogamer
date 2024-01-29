import { combineReducers } from "redux";

import gamesReducer from "../redux/games/gamesReducer";
import gameDetailsReducer from "./specific game detail/gameReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: gameDetailsReducer,
});

export default rootReducer;
