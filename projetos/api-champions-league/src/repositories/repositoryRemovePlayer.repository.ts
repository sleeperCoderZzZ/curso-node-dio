import { PlayerModel } from "../models/player-model";
import fs from "fs";

export const repositoryRemovePlayer = async (id: number): Promise<PlayerModel | null> => {
  try {
    const data: { players: PlayerModel[] } = JSON.parse(
      fs.readFileSync("src/data/players.json", "utf-8"),
    );
    const index = data.players.findIndex((player) => player.id === id);

    if (index === -1) {
      return null;
    }

    const removedPlayer = data.players.splice(index, 1)[0];

    fs.writeFileSync("src/data/players.json", JSON.stringify(data, null, 2));

    return removedPlayer;
  } catch (error) {
    console.error("Error removing player:", error);
    return null;
  }
};

export default repositoryRemovePlayer;