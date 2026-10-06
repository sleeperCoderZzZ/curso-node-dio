import * as http from 'http';
import { getListEpisodes } from './controllers/podcasts.controller';

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
    
    if (request.url === '/episodes' && request.method === 'GET') {
        await getListEpisodes(request, response);
    }
    
});



const port = process.env.PORT || 3333;



server.listen(port, () => {
    console.log(`Server está rodando na porta: ${port}`);
});
