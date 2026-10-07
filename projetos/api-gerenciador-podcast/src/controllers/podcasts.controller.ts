import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodes.service";
import { serviceFilterEpisodes } from "../services/filterEpisodes.service";
import { StatusCodes } from "../utils/statusCode.utils";
import { ContentTypes } from "../utils/contentType.utils";
import { FilterPodcast } from "../models/filterPodcast.model";

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  const episodes = await serviceListEpisodes();
  response.writeHead(StatusCodes.OK, { "Content-Type": ContentTypes.JSON });
  response.end(
    JSON.stringify({ message: "Lista de episódios", data: episodes }),
  );
};

export const getFilteredEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  const content: FilterPodcast = await serviceFilterEpisodes(request.url);

  const url = content.body[0].podcastName || "Desconhecido";

  response.writeHead(content.statusCode, { "Content-Type": ContentTypes.JSON });
  
  response.end(
    JSON.stringify({
      message: `Episódios filtrados por podcast: ${url}`,
      data: content.body,
    }),
  );
};
