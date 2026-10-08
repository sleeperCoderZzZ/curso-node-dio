import express, {Request, Response} from "express";
import routes from "../routes/router.routes";
import { RoutesList } from "../utils/routesList";

function createApp(): express.Application {
  const app = express();

  app.use(express.json());
  app.use(RoutesList.DEFAULT_ROUTE, routes);

  return app;
}

export default createApp;