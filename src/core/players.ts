import type { PlayerConfig } from "../shared/types/player";

const playerBase = {
    win: false,
    lose: false,
    draw: false,
};

const player: PlayerConfig = { ...playerBase, name: "Player" };
const computer: PlayerConfig = { ...playerBase, name: "Computer" };

export const resetPlayerData = () => ({
    player: { ...player },
    computer: { ...computer },
});

export const resetGameData = () => ({
    draw: false,
    computer: {
        score: 0,
        victory: false,
    },
    player: {
        score: 0,
        victory: false,
    },
});

export const playerData = resetPlayerData();
export const game = resetGameData();
