import { PlayerModel } from "../models/player-model";

import fs from "fs";

import { OK, BAD_REQUEST } from "../utils/http-helper";

export const repositoryUpdatePlayer = async (id: number, player: PlayerModel): Promise<any> => {
  try {
    // Read the players data from the JSON file
    const playersData = fs.readFileSync("src/data/players.json", "utf8");
    const players = JSON.parse(playersData);

    // Find the index of the player to be updated
    const index = players.findIndex((p: PlayerModel) => p.id === id);

    if (index === -1) {
      // Player not found
      return await BAD_REQUEST("Player not found.");
    }

    // Update the player's data
    players[index] = { ...players[index], ...player };

    // Write the updated players array back to the JSON file
    fs.writeFileSync("src/data/players.json", JSON.stringify(players, null, 2));

    return await OK("Player updated successfully.");
  } catch (error) {
    console.error("Error updating player:", error);
    return await BAD_REQUEST("An error occurred while updating the player.");
  }
};