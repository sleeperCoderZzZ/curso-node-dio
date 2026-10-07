import { Podcast } from "./Podcast.model";
import { StatusCodes } from "../utils/statusCode.utils";

export interface FilterPodcast {
  statusCode: StatusCodes;
  body: Podcast[];
} 