import { Request, Response } from "express";
import { PlayerModel } from "../models/player-model";
import { repositoryAddPlayer } from "../repositories/repositoryAddPlayer.repository";
import { CREATED, BAD_REQUEST } from "../utils/http-helper";

export const addPlayerService = async (req: Request, res: Response) => {
  const player: PlayerModel = req.body;

  if (!player.name || !player.club) {
    return await BAD_REQUEST("Name and club are required fields.");
  }

  const data = await repositoryAddPlayer(player);

  let response = null;

  if (!data) {
    response = await BAD_REQUEST("Failed to add player.");
  } else {
    response = await CREATED(data);
  }

  return response;
};

export default addPlayerService;
