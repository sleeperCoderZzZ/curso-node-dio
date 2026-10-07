import fs from "fs";
import path from "path";
import { Podcast } from "../models/Podcast.model";
import { Encodes } from "../utils/encode.utils";


const filePath = path.join(__dirname, "../repository/database/podcasts.json");

export const repositoryPodcast = async (
  PodcastName?: string,
): Promise<Podcast[]> => {
  const data = await fs.promises.readFile(filePath, Encodes.UTF8);

  const episodes: Podcast[] = JSON.parse(data);

  if (PodcastName) {
    return filterEpisodesByPodcastName(episodes, PodcastName);
  }

  return JSON.parse(data);
};

function filterEpisodesByPodcastName(episodes: Podcast[], podcastName: string): Podcast[] {
  return episodes.filter((episode) => episode.podcastName === podcastName);
}