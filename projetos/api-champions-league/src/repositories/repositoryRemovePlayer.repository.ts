import {players} from "../data/players.json";
import { PlayerModel } from "../models/player-model";
import fs from "fs";

export const repositoryRemovePlayer = async (id: number): Promise<PlayerModel | null> => {
  try {
    // Find the index of the player to be removed
    const index = players.findIndex((player) => player.id === id);

    if (index === -1) {
      // Player not found
      return null;
    }

    // Remove the player from the players array
    const removedPlayer = players.splice(index, 1)[0];

    // Write the updated players array back to the JSON file
    fs.writeFileSync("src/data/players.json", JSON.stringify(players, null, 2));

    return removedPlayer;
  } catch (error) {
    console.error("Error removing player:", error);
    return null;
  }
};

export default repositoryRemovePlayer;