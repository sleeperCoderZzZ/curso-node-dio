import { FilterPodcast } from "../models/filterPodcast.model";
import { repositoryPodcast } from "../repository/podcast.repository";
import { StatusCodes } from "../utils/statusCode.utils";

export const serviceFilterEpisodes = async (PodcastName: string | undefined): Promise<FilterPodcast> => {
  const data = await repositoryPodcast();

  if (!PodcastName) {
    throw new Error("Nome do podcast não fornecido");
  }

  let responseFormat: FilterPodcast = {
    statusCode: StatusCodes.OK,
    body: [],
  };

  const url = PodcastName.split("?")[1];
  const podcastName = new URLSearchParams(url).get("podcastName");

  if(data.length === 0) {
    responseFormat.statusCode = StatusCodes.NOT_FOUND;
    responseFormat.body = [];
    return responseFormat;
  }

  if (podcastName) {
    responseFormat.statusCode = StatusCodes.OK;
  } else {
    responseFormat.statusCode = StatusCodes.BAD_REQUEST;
    responseFormat.body = [];
  }

  const filteredEpisodes = data.filter(
    (episode) => episode.podcastName === podcastName,
  );

  if(filteredEpisodes.length > 0) {
    responseFormat.body = filteredEpisodes;
  }

  return responseFormat;
};
