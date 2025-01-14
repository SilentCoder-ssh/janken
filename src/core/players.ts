import type { PlayerConfig } from "../shared/types/player";

const playerBase = {
  win: false,
  lose: false,
  draw: false,
};

export const game = {
  draw: false,
  computer: {
    score: 0,
    victory: false,
  },
  player: {
    score: 0,
    victory: false,
  },
};

const player: PlayerConfig = { ...playerBase, name: "Player" };
const computer: PlayerConfig = { ...playerBase, name: "Computer" };

const playerData = {
  player: { ...player },
  computer: { ...computer },
};

export const resetPlayerData = { ...playerData };
export const resetGameData = { ...game };
