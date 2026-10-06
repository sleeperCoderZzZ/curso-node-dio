import * as http from 'http';
import { getFilteredEpisodes, getListEpisodes } from './controllers/podcasts.controller';


const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
    
    if (request.url === '/episodes' && request.method === 'GET') {
        await getListEpisodes(request, response);
    }

    if(request.url?.startsWith('/episodes?podcastName=') && request.method === 'GET') {
        await getFilteredEpisodes(request, response);
    }

    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Endpoint não encontrado' }));
    
});



const port = process.env.PORT || 3333;



server.listen(port, () => {
    console.log(`Server está rodando na porta: ${port}`);
});
