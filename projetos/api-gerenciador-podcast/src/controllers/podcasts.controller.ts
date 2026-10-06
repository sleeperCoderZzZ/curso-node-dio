import { IncomingMessage, ServerResponse} from 'http';
import { serviceListEpisodes } from '../services/listEpisodes.service';
import { serviceFilterEpisodes } from '../services/filterEpisodes.service';

export const getListEpisodes = async  (request: IncomingMessage, response: ServerResponse) => {
    if(request.url === '/episodes' && request.method === 'GET') {
        const episodes = await serviceListEpisodes();
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: 'Lista de episódios', data: episodes }));
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Lista de episódios', data: {} }));
};

export const getFilteredEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const url = new URL(request.url || '', `http://${request.headers.host}`);
    const podcastName = url.searchParams.get('podcastName');

    if (podcastName) {
        const filteredEpisodes = await serviceFilterEpisodes(podcastName);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: `Episódios filtrados por podcast: ${podcastName}`, data: filteredEpisodes }));
    } else {
        response.writeHead(400, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: 'Parâmetro podcastName não fornecido' }));
    }
};