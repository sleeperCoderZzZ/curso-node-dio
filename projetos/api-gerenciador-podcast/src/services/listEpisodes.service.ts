
import { repositoryPodcast } from '../repository/podcast.repository';



export const serviceListEpisodes = async () => {
  const data = await repositoryPodcast();

  return data;
};
