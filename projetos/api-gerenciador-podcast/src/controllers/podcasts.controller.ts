import { IncomingMessage, ServerResponse} from 'http';


export const getListEpisodes =async  (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Lista de episódios' }));
};