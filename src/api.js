// API Key
const api_key = "22e6d67073e143268aaa6a4a78cc5ea8";

// Base URL
const base_url = `https://api.rawg.io/api/games`;

/*
Popular Games:
https://api.rawg.io/api/games?key=22e6d67073e143268aaa6a4a78cc5ea8&dates=2020-09-08,2021-09-08&ordering=-rating&page_size=16

UpComing Games:
https://api.rawg.io/api/games?key=22e6d67073e143268aaa6a4a78cc5ea8&dates=2020-09-08,2021-09-08&ordering=-added&page_size=16

New Games:
https://api.rawg.api/games?key=22e6d67073e143268aaa6a4a78cc5ea8&dates=2020-09-08,2021-09-08&ordering=-released&page_size=16
*/

//Getting current Date
const getCurrentMoth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Get current Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Get current Year
const getCurrentYear = () => new Date().getFullYear();

// Get full Date

const currentDay = getCurrentDay();
const currentMoth = getCurrentMoth();
const currentYear = getCurrentYear();

const currentDate = `${currentYear}-${currentMoth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMoth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMoth}-${currentDay}`;

/*Fetch Games Data
=========================*/

const popular_games = `?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
export const popularGamesURL = () => `${base_url}${popular_games}`;

const up_coming_games = `?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
export const upComingGamesURL = () => `${base_url}${up_coming_games}`;

const new_games = `?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;
export const newGamesURL = () => `${base_url}${new_games}`;

/*Fetch Specific Game Data
=========================*/

export const gameDetailURL = (game_id) =>
  `${base_url}/${game_id}?key=${api_key}`;

export const gameScreenshotsURL = (game_id) =>
  `${base_url}/${game_id}/screenshots?key=${api_key}`;

console.log(gameScreenshotsURL());

/*

https://api.rawg.io/api/games/3498?key=22e6d67073e143268aaa6a4a78cc5ea8
https://api.rawg.io/api/games/3498/screenshots?key=22e6d67073e143268aaa6a4a78cc5ea8
*/
