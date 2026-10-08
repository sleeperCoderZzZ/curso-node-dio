import { Request, Response } from "express";
import { repositoryGetPlayerById } from "../repositories/repositoryGetPlayerById.repository";
import { NO_CONTENT, OK } from "../utils/http-helper";

export const getPlayerByIdService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await repositoryGetPlayerById(Number(id));

  let response = null;

  if (!data) {
    response = await NO_CONTENT();
  } else {
    response = await OK(data);
  }
  
  return response;
};

export default getPlayerByIdService;