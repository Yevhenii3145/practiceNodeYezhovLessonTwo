const http = require('http');
const fs = require('fs').promises;

// Можно синхронно делать чтение файла в самом начале 
// const manifest = fs.readFileSync('./package.json', 'utf8');

const PORT = 8081;

// Можно манифест читать асинхронно, чтобы не блокировать ничего
const requestHandler = async (request, response) => {
    const manifest = await fs.readFile('./package.json', 'utf8');
    response.writeHead(200, {'Content-type': 'text/json'})
    return response.end(manifest);
    // if(request.url.indexOf('/home') >= 0) {
    //     response.writeHead(200, {'Content-type': 'text/json'})
    //     return response.end('{"url": "homepage"}');
    // }
    // response.writeHead(200, {'Content-type': 'text/json'})
    // return response.end('{"url": "other"}');

    // Можно создать фронтенд папку
    // Прочитать его с помощью fs.readfile
    // И прочитанное поместить в response.end

    // response.end('<h1>GOIT</h1>')

    // либо можно 
    // response.write('<h1>GOIT</h1>')
    // response.end()
};

const server = http.createServer(requestHandler);

// http - 80
// https - 443
server.listen(PORT, (err) => {
    if(err)  {
        console.error('Error at a server launch: ', err);
    }
    console.log(`Server works at port ${PORT}!`)
});
