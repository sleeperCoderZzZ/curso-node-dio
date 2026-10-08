import express, {Request, Response} from "express";
import routes from "../routes/router.routes";
import { RoutesList } from "../utils/routesList";

function createApp(): express.Application {
  const app = express();

  app.use(RoutesList.DEFAULT_ROUTE, routes);

  app.use(express.json());

  return app;
}

export default createApp;