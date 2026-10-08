import fs from "fs";
import { PlayerModel } from "../models/player-model";

export const repositoryGetPlayers = async (): Promise<
  PlayerModel[] | undefined
> => {
  const data: PlayerModel[] = JSON.parse(
    fs.readFileSync("src/data/players.json", "utf-8"),
  );

  return data;
};

export const repositoryGetPlayerById = async (
  id: number,
): Promise<PlayerModel | undefined> => {
  const data: PlayerModel[] = JSON.parse(
    fs.readFileSync("src/data/players.json", "utf-8"),
  );
  const player = data.find((player) => player.id === id);

  return player;
};
