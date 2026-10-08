import { PlayerModel } from "../models/player-model";

import fs from "fs";


export const repositoryUpdatePlayer = async (id: number, player: PlayerModel): Promise<PlayerModel | null> => {
  try {
    const playersData = fs.readFileSync("src/data/players.json", "utf8");
    const data: { players: PlayerModel[] } = JSON.parse(playersData);

    const index = data.players.findIndex((item) => item.id === id);

    if (index === -1) {
      return null;
    }

    data.players[index] = { ...data.players[index], ...player, id };

    fs.writeFileSync("src/data/players.json", JSON.stringify(data, null, 2));

    return data.players[index];
  } catch (error) {
    console.error("Error updating player:", error);
    return null;
  }
};