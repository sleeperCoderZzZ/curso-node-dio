import * as http from 'http';
import { getFilteredEpisodes, getListEpisodes } from './controllers/podcasts.controller';
import { Routes } from './routes/routes.route';
import { HttpMethods } from './utils/httpMethods.utils';
import { StatusCodes } from './utils/statusCode.utils';

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
    
    if (request.url === Routes.LIST_EPISODES && request.method === HttpMethods.GET) {
        await getListEpisodes(request, response);
    }

    if(request.url?.startsWith(Routes.FILTER_EPISODES) && request.method === HttpMethods.GET) {
        await getFilteredEpisodes(request, response);
    }

    response.writeHead(StatusCodes.NOT_FOUND, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Endpoint não encontrado' }));
    
});



const port = process.env.PORT || 3333;



server.listen(port, () => {
    console.log(`Server está rodando na porta: ${port}`);
});
