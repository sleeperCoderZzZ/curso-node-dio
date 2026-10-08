import { repositoryGetPlayers } from "../repositories/repositoryGetPlayerById.repository";
import { OK, INTERNAL_SERVER_ERROR } from "../utils/http-helper";

export const listClubsService = async (): Promise<any> => {
  try {
    const players = await repositoryGetPlayers();

    if (!players) {
      return await INTERNAL_SERVER_ERROR("Failed to retrieve players.");
    }

    const clubs: string[] = Array.from(new Set(players.map((player) => player.club)));

    return await OK(clubs);
  } catch (error) {
    console.error("Error listing clubs:", error);
    return await INTERNAL_SERVER_ERROR("An error occurred while listing clubs.");
  }
};

export default listClubsService;