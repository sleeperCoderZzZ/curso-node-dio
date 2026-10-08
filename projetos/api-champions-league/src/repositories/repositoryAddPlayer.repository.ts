import { PlayerModel } from "../models/player-model";
import fs from "fs";
import {players} from "../data/players.json";

export const repositoryAddPlayer = async (player: PlayerModel): Promise<PlayerModel | null> => {
  try {
    // Generate a new ID for the player
    const newId = players.length > 0 ? Math.max(...players.map(p => p.id)) + 1 : 1;
    const newPlayer: PlayerModel = { ...player, id: newId };

    // Add the new player to the players array
    players.push(newPlayer);

    // Write the updated players array back to the JSON file
    fs.writeFileSync("src/data/players.json", JSON.stringify(players, null, 2));

    return newPlayer;
  } catch (error) {
    console.error("Error adding player:", error);
    return null;
  }
};

export default repositoryAddPlayer;