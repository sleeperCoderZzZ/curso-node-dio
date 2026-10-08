import express, {Request, Response} from "express";
import routes from "../routes/router.routes";
import { RoutesList } from "../utils/routesList";
import cors from "cors";

function createApp(): express.Application {
  const app = express();

  
  app.use(express.json());
  app.use(RoutesList.DEFAULT_ROUTE, routes);
  
  app.use(cors());

  return app;
}

export default createApp;