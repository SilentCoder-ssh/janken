/**
*  Configuration des deux joueurs
*/

interface PlayerConfig {
    name: string;
    score: number;
    choice: string;
    win: boolean;
    lose: boolean;
    draw: boolean
}

const player: PlayerConfig = {
    name: "Player",
    score: 0,
    choice: "",
    win: false,
    lose: false,
    draw: false
}

const computer: PlayerConfig = {
    name: "Computer",
    score: 0,
    choice: "",
    win: false,
    lose: false,
    draw: false
}

export { player, computer };