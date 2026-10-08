import fs from "fs";
import { PlayerModel } from "../models/player-model";

const readPlayers = (): PlayerModel[] => {
  const data: { players: PlayerModel[] } = JSON.parse(
    fs.readFileSync("src/data/players.json", "utf-8"),
  );

  return data.players;
};

export const repositoryGetPlayers = async (): Promise<
  PlayerModel[] | undefined
> => {
  return readPlayers();
};

export const repositoryGetPlayerById = async (
  id: number,
): Promise<PlayerModel | undefined> => {
  const data = readPlayers();
  const player = data.find((player) => player.id === id);

  return player;
};
