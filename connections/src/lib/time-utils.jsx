import queryString from "query-string";

import {CONNECTION_GAMES} from "./data";
import {random} from "./utils";

export const getPuzzleAtIndex = (index) => {
  if (index < 0) {
    index = random(0, CONNECTION_GAMES.length - 1);
  }

  return CONNECTION_GAMES[index % CONNECTION_GAMES.length];
};

export const getSolution = (index) => {
  const puzzleOfTheDay = getPuzzleAtIndex(index);
  console.log("index on load: ", index);
  return {
    puzzleAnswers: puzzleOfTheDay,
    puzzleIndex: index,
  };
};

export const getGameIndex = () => {
  if (getGameIndexInQueryString()) {
    console.log("Detected query string param `d`.")
    const parsed = queryString.parse(window.location.search);
    console.log("Attempted to parse: ", parsed);
    try {
      return parseInt(parsed.d?.toString());
    } catch (e) {
      console.log(e);
    }
  }

  return random(0, CONNECTION_GAMES.length - 1);
};

// If the queryparam `d` is present, assume the game index is specified.
export const getGameIndexInQueryString = () => {
  // https://github.com/cwackerfuss/react-wordle/pull/505
  const parsed = queryString.parse(window.location.search);
  console.log("Attempted to parse: ", parsed);
  return "d" in parsed;
};

export const { puzzleAnswers, puzzleIndex } =
  getSolution(getGameIndex());
