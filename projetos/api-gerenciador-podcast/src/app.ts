import * as http from 'http';
import { getFilteredEpisodes, getListEpisodes } from './controllers/podcasts.controller';
import { Routes } from './routes/routes.route';
import { HttpMethods } from './utils/httpMethods.utils';
import { StatusCodes } from './utils/statusCode.utils';
import { ContentTypes } from './utils/contentType.utils';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    
    if(request.url?.startsWith(Routes.FILTER_EPISODES) && request.method === HttpMethods.GET) {
        return getFilteredEpisodes(request, response);
    }

    if (request.url?.startsWith(Routes.LIST_EPISODES) && request.method === HttpMethods.GET) {
        return getListEpisodes(request, response);
    }
        
    response.writeHead(StatusCodes.OK, { 'Content-Type': ContentTypes.JSON });
    response.end(JSON.stringify({ message: 'Endpoint não encontrado' }));
    
}