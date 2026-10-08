import { PlayerModel } from "../models/player-model";

import { repositoryUpdatePlayer } from "../repositories/repositoryUpdatePlayer.repository";
import { NO_CONTENT, BAD_REQUEST } from "../utils/http-helper";

export const updatePlayerService = async (id: number, player: PlayerModel): Promise<any> => {
  try {
    const data = await repositoryUpdatePlayer(id, player);

    let response = null;

    if (!data) {
      response = await BAD_REQUEST("Failed to update player.");
    } else {
      response = await NO_CONTENT();
    }

    return response;
  } catch (error) {
    console.error("Error updating player:", error);
    return await BAD_REQUEST("An error occurred while updating the player.");
  }
};

export default updatePlayerService;