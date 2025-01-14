export interface PlayerConfig {
  name: string;
  win: boolean;
  lose: boolean;
  draw: boolean;
}

export interface PlayerManagement {
  player: PlayerConfig;
  computer: PlayerConfig;
}
