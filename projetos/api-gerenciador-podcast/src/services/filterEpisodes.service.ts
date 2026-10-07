import { repositoryPodcast } from "../repository/podcast.repository";

export const serviceFilterEpisodes = async (PodcastName: string | undefined) => {
  const data = await repositoryPodcast();

  if (!PodcastName) {
    throw new Error("Nome do podcast não fornecido");
  }

  const url = PodcastName.split("?")[1];
  const podcastName = new URLSearchParams(url).get("podcastName");

  if (!podcastName) {
    throw new Error("Nome do podcast não fornecido");
  }

  const filteredEpisodes = data.filter(
    (episode) => episode.podcastName === podcastName,
  );

  return filteredEpisodes;
};
