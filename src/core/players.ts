import type { PlayerConfig } from "../shared/types/player-config";

/**
 *  Configuration des deux joueurs
 */

const playerBase = {
  score: 0,
  choice: "",
  win: false,
  lose: false,
  draw: false,
};

const player: PlayerConfig = { ...playerBase, name: "Player" };
const computer: PlayerConfig = { ...playerBase, name: "Computer" };

export { player, computer };
