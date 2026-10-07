import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodes.service";
import { serviceFilterEpisodes } from "../services/filterEpisodes.service";
import { StatusCodes } from "../utils/statusCode.utils";

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  const episodes = await serviceListEpisodes();
  response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify({ message: "Lista de episódios", data: episodes }),
  );
};

export const getFilteredEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  const filteredEpisodes = await serviceFilterEpisodes(request.url);

  if (filteredEpisodes.length === 0) {
    response.writeHead(StatusCodes.NOT_FOUND, {
      "Content-Type": "application/json",
    });
    response.end(
      JSON.stringify({
        message: "Nenhum episódio encontrado para o podcast especificado",
      }),
    );
    return;
  }

  const url = filteredEpisodes[0]?.podcastName || "Desconhecido";

  response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify({
      message: `Episódios filtrados por podcast: ${url}`,
      data: filteredEpisodes,
    }),
  );
};
