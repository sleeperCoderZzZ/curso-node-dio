import { Request, Response } from "express";
import { repositoryGetPlayers } from "../repositories/repositoryGetPlayerById.repository";
import { NO_CONTENT, OK } from "../utils/http-helper";

export const listPlayersService = async (req: Request, res: Response) => {
  const data = await repositoryGetPlayers();

  let response = null;

  if (!data) {
    response = await NO_CONTENT();
  } else {
    response = await OK(data);
  }

  return response;
};

export default listPlayersService;
