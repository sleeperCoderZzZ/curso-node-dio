import { Router } from "express";
import { controllerPlayers } from "../controllers/controllerPlayers.controller";
import { RoutesList } from "../utils/routesList";

const routes = Router();

routes.get(RoutesList.LIST_PLAYERS, controllerPlayers.listPlayers);

routes.get(RoutesList.LIST_CLUBS, controllerPlayers.listClubs);

routes.get(RoutesList.GET_PLAYER, controllerPlayers.getPlayerById);

routes.post(RoutesList.ADD_PLAYER, controllerPlayers.addPlayer);

routes.delete(RoutesList.REMOVE_PLAYER, controllerPlayers.removePlayer);

routes.put(RoutesList.UPDATE_PLAYER, controllerPlayers.updatePlayer);

routes.patch(RoutesList.UPDATE_PLAYER, controllerPlayers.updatePlayer);

export default routes;
