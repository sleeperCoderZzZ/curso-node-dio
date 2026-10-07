
import { FilterPodcast } from '../models/filterPodcast.model';
import { repositoryPodcast } from '../repository/podcast.repository';
import { StatusCodes } from '../utils/statusCode.utils';




export const serviceListEpisodes = async (): Promise<FilterPodcast> => {
  let responseFormat: FilterPodcast = {
    statusCode: StatusCodes.OK,
    body: [],
  };

  const data = await repositoryPodcast();

  responseFormat = {
    statusCode: data.length > 0 ? StatusCodes.OK : StatusCodes.NOT_FOUND,
    body: data,
  };

  return responseFormat;
};
