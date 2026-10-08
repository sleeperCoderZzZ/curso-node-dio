import { Request, Response } from "express";
import { listPlayersService } from "../services/listPlayers.service";
import { getPlayerByIdService } from "../services/getPlayerById.service";
import { addPlayerService } from "../services/addPlayer.service";
import { removePlayerService } from "../services/removePlayer.service";
import { updatePlayerService } from "../services/updatePlayer.service";
import { listClubsService } from "../services/listClubs.service";

const listPlayers = async (req: Request, res: Response): Promise<void> => {
  const httpResponse = await listPlayersService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

const getPlayerById = async (req: Request, res: Response): Promise<void> => {
  const httpResponse = await getPlayerByIdService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

const addPlayer = async (req: Request, res: Response): Promise<void> => {
  const httpResponse = await addPlayerService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

const removePlayer = async (req: Request, res: Response): Promise<void> => {
  const httpResponse = await removePlayerService(Number(req.params.id));
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

const updatePlayer = async (req: Request, res: Response): Promise<void> => {
  const httpResponse = await updatePlayerService(Number(req.params.id), req.body);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

const listClubs = async (req: Request, res: Response): Promise<void> => {
  const httpResponse = await listClubsService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const controllerPlayers = {
  listPlayers,
  listClubs,
  addPlayer,
  removePlayer,
  updatePlayer,
  getPlayerById,
};
