import { repositoryPodcast } from '../repository/podcast.repository';

export const serviceFilterEpisodes = async (PodcastName: string) => {
  const data = await repositoryPodcast();

    const filteredEpisodes = data.filter((episode) => episode.podcastName === PodcastName);

    return filteredEpisodes;
}