import { PlayerModel } from "../models/player-model";
import fs from "fs";

export const repositoryAddPlayer = async (player: PlayerModel): Promise<PlayerModel | null> => {
  try {
    const data: { players: PlayerModel[] } = JSON.parse(
      fs.readFileSync("src/data/players.json", "utf-8"),
    );
    const newId = data.players.length > 0 ? Math.max(...data.players.map((item) => item.id)) + 1 : 1;
    const newPlayer: PlayerModel = { ...player, id: newId };

    data.players.push(newPlayer);
    fs.writeFileSync("src/data/players.json", JSON.stringify(data, null, 2));

    return newPlayer;
  } catch (error) {
    console.error("Error adding player:", error);
    return null;
  }
};

export default repositoryAddPlayer;