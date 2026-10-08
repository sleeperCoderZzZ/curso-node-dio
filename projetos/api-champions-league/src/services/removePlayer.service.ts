import { NO_CONTENT, BAD_REQUEST, NOT_FOUND } from "../utils/http-helper";
import repositoryRemovePlayer from "../repositories/repositoryRemovePlayer.repository";

export const removePlayerService = async (id: number): Promise<any> => {
  try {
    const data = await repositoryRemovePlayer(id);

    let response = null;

    if (!data) {
      response = await NOT_FOUND("Player not found.");
    } else {
      response = await NO_CONTENT();
    }

    return response;
  } catch (error) {
    console.error("Error removing player:", error);
    return await BAD_REQUEST("An error occurred while removing the player.");
  }
};

export default removePlayerService;